<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Hooks and callbacks
 *
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 *
 * @package   tool_developer
 * @copyright 04/03/2023 Mfreak.nl | LdesignMedia.nl - Luuk Verhoeven
 * @author    Luuk Verhoeven
 **/

/**
 * Try to load it as fast as possible
 *
 * @return void
 */
function load_sentry() {

    static $loaded = false;

    if (!empty($loaded)) {
        return;
    }

    require_once(__DIR__ . '/vendor/autoload.php');
    \Sentry\init([
        'dsn' => getenv('SENTRYDNS'),
        'traces_sample_rate' => 1.0,
        'environment' => parse_url($CFG->wwwroot ?? '', PHP_URL_HOST),
    ]);
    \Sentry\configureScope(function (\Sentry\State\Scope $scope): void {
        global $USER;
        $scope->setUser(['id' => $USER->id ?? 0]);
    });
    $loaded = true;
}

load_sentry();

/**
 * @return void
 */
function tool_developer_before_http_headers(): void {

    global $CFG, $PAGE;

    // Flag prevents saving this to the config and can be used for debugging.
    if ($PAGE->url->get_param('section') === 'additionalhtml') {
        return;
    }

    // Always catch JS errors.
    $CFG->additionalhtmlhead .= '<script src="https://browser.sentry-cdn.com/7.40.0/bundle.tracing.replay.min.js"
  integrity="sha384-ucxPsCkRds5vICOoq+CNlwpaY/vlgZdwDqr/I+CKUsm+pBm5r6KNL+Y95Mo0o2tI" crossorigin="anonymous"></script>
  <script defer>Sentry.init({
      dsn: "' . getenv('SENTRYDNS') . '",
      release: "' . parse_url($CFG->wwwroot ?? '', PHP_URL_HOST) . '@1.0.0",
      tracesSampleRate: 1.0,
      integrations: [new Sentry.BrowserTracing()],
      environment : "' . parse_url($CFG->wwwroot ?? '', PHP_URL_HOST) . '",
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      integrations: [
        new Sentry.Replay({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
    });</script>';

    if (!empty($CFG->cachejs)) {
        return;
    }

    // Register new service worker.
    $CFG->additionalhtmlhead .= '<script>
    if (\'serviceWorker\' in navigator) {
      window.addEventListener(\'load\', function() {
        navigator.serviceWorker.register(\'/?serviceworker=1\').then(function(registration) {
          console.log(\'Service Worker registered with scope:\', registration.scope);
        }, function(err) {
          console.log(\'Service Worker registration failed:\', err);
        });
      });
    }
    </script>';
}

/**
 * Load service worker from root scope
 *
 * @return void
 */
function tool_developer_after_config(): void {
    $serviceworker = optional_param('serviceworker', false, PARAM_BOOL);
    if ($serviceworker) {
        header('Content-Type: application/javascript');
        echo file_get_contents(__DIR__ . '/static-worker.js');
        die;
    }
}
