## Moodle - tool_developer

This plugin provides useful tools for Moodle development, and can greatly enhance the development process. However, it is important to note that it  ❗❗ **should only be used in test environments!**

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
- If the `cachejs` setting is disabled, the service worker will now load debug javascript once.
- Sentry has been added and the *SENTRYDNS* is now loaded from the `SENTRYDNS` environment variable, allowing it to be configured on the server level.
- The Moodle upgrade process will now be automatically confirmed with JavaScript, giving you real-time visibility into the process without having to manually click any buttons. The script will make up to 8 attempts to complete the process and will allow you to debug any errors that occur.

- TODO easy see if debug is on (enable fast switching)
- TODO Record error traces to log
- TODO debugbar

## Installation

There are three ways to install this plugin:

### Option 1: Manual Installation
1. Download the plugin files.
2. Copy the plugin folder to the `admin\tool\developer` directory on your Moodle server.
3. Log in as an administrator.
4. Navigate to Site Administration > Notifications.
5. Install the plugin.
6. Fill out the required settings.

### Option 2: Git Installation
1. Open the command prompt.
2. Navigate to the Moodle root directory on your server.
3. Run the following command: `git clone https://github.com/LdesignMedia/moodle-tool_developer.git admin/tool/developer`.
4. Log in as an administrator.
5. Navigate to Site Administration > Notifications.
6. Install the plugin.
7. Fill out the required settings.

### Option 3: Moodle Plugin Upload
1. Log in as an administrator.
2. Navigate to Site Administration > Plugins > Install plugins.
3. Choose the "Install plugin from ZIP file" option.
4. Upload the plugin ZIP file.
5. Follow the on-screen instructions to complete the installation process.
6. Fill out the required settings.

## Security
If you discover any security issues with this plugin, please do not use the issue tracker. Instead, send an email to [luuk@ldesignmedia.nl](mailto:luuk@ldesignmedia.nl) so that the issue can be addressed promptly.

## License
This plugin is released under the GNU GENERAL PUBLIC LICENSE. Please refer to the [License File](LICENSE) for further details.

## Contributing
We welcome and fully credit contributions to this plugin. Please submit any contributions via pull requests on our [Github repository](https://github.com/LdesignMedia/moodle-tool_developer).
