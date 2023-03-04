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
 * @package   moodle-tool_developer
 * @copyright 04/03/2023 Mfreak.nl | LdesignMedia.nl - Luuk Verhoeven
 * @author    Luuk Verhoeven
 **/

/**
 * @return void
 */
function tool_developer_before_http_headers() {

    global $CFG;
    if (!empty($CFG->cachejs)) {
        return;
    }

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

function tool_developer_after_config() {
    $serviceworker = optional_param('serviceworker', false, PARAM_BOOL);
    if ($serviceworker) {
        header('Content-Type: application/javascript');
        echo file_get_contents(__DIR__ . '/static-worker.js');
        die;
    }
}
