## Moodle - tool_developer

This plugin has tools helpful for Moodle development. 
Should be used in test environments only.

## Author
<img src="https://ldesignmedia.nl/themes/ldesignmedia/assets/images/logo/logo.svg" alt="ldesignmedia" height="70px">

* Author: Luuk Verhoeven, [ldesignmedia.nl](https://ldesignmedia.nl/)
* Min. required: Moodle 3.9
* Supports PHP: 7.4

![Moodle39](https://img.shields.io/badge/moodle-3.9-brightgreen.svg)
![PHP7.4](https://img.shields.io/badge/PHP-7.4-brightgreen.svg)
![Privacy-friendly](https://img.shields.io/badge/Privacy-friendly-brightgreen.svg)
![GitHub Workflow Status (main)](https://img.shields.io/github/actions/workflow/status/LdesignMedia/moodle-tool_developer/ci.yml?branch=main)





## List of features
- Service worker to load debug javascript once if `cachejs` setting is disabled.
- Added Sentry DNS is loaded from `SENTRYDNS` environment variable.
- Auto walkthrough the Moodle upgrade process with javascript, see what's happening .
- TODO easy see if debug is on (enable fast switching)
- TODO Record error traces to log
- TODO debugbar


## Installation
1.  Copy this plugin to the `admin\tool\developer` directory on the server
2.  Login as administrator
3.  Go to Site Administrator > Notifications
4.  Install the plugin
5.  You will need to fill out the settings.

## Security

If you discover any security related issues, please email [luuk@ldesignmedia.nl](mailto:luuk@ldesignmedia.nl) instead of using the issue tracker.

## License

The GNU GENERAL PUBLIC LICENSE. Please see [License File](LICENSE) for more information.

## Contributing

Contributions are welcome and will be fully credited. We accept contributions via Pull Requests on Github.
