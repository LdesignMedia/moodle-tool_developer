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
 * Auto upgrade /admin/index.php
 *
 * @package   tool_developer
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @copyright 04/03/2023 Mfreak.nl | LdesignMedia.nl - Luuk Verhoeven
 * @author    Luuk Verhoeven
 **/

import Log from 'core/log';

const Selector = {
    ContinueButton: '.continuebutton button[type="submit"]',
};

export const init = () => {
    Log.log('tool_developer - autoupgrade.js - v1.0.1');

    Log.log('scroll down' + document.body.scrollHeight);
    const pageHeight = document.body.scrollHeight;
    window.scrollTo(0, pageHeight);

    // Find the submit button element.
    const submitButton = document.querySelector(Selector.ContinueButton);
    if(submitButton){
        submitButton.click();
    }
};
