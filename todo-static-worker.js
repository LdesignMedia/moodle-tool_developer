
// Define an array of JavaScript files to cache
const JS_FILES = [
'/h5p/h5plib/v124/joubel/core/js/h5p-resizer.js',
'/lib/javascript.php/-1/comment/comment.js',
'/lib/javascript.php/-1/lib/jquery/jquery-3.6.1.js',
'/lib/javascript.php/-1/lib/requirejs/require.js',
'/lib/javascript.php/-1/repository/filepicker.js',
'/lib/requirejs.php/-1/block_myoverview/main.js',
'/lib/requirejs.php/-1/block_myoverview/repository.js',
'/lib/requirejs.php/-1/block_myoverview/selectors.js',
'/lib/requirejs.php/-1/block_myoverview/view.js',
'/lib/requirejs.php/-1/block_myoverview/view_nav.js',
'/lib/requirejs.php/-1/block_online_users/change_user_visibility.js',
'/lib/requirejs.php/-1/block_recentlyaccessedcourses/main.js',
'/lib/requirejs.php/-1/block_recentlyaccesseditems/main.js',
'/lib/requirejs.php/-1/block_recentlyaccesseditems/repository.js',
'/lib/requirejs.php/-1/block_starredcourses/main.js',
'/lib/requirejs.php/-1/block_starredcourses/repository.js',
'/lib/requirejs.php/-1/block_timeline/calendar_events_repository.js',
'/lib/requirejs.php/-1/block_timeline/event_list.js',
'/lib/requirejs.php/-1/block_timeline/main.js',
'/lib/requirejs.php/-1/block_timeline/view.js',
'/lib/requirejs.php/-1/block_timeline/view_courses.js',
'/lib/requirejs.php/-1/block_timeline/view_dates.js',
'/lib/requirejs.php/-1/block_timeline/view_nav.js',
'/lib/requirejs.php/-1/core/ajax.js',
'/lib/requirejs.php/-1/core/aria.js',
'/lib/requirejs.php/-1/core/auto_rows.js',
'/lib/requirejs.php/-1/core/backoff_timer.js',
'/lib/requirejs.php/-1/core/config.js',
'/lib/requirejs.php/-1/core/custom_interaction_events.js',
'/lib/requirejs.php/-1/core/drawer.js',
'/lib/requirejs.php/-1/core/drawer_events.js',
'/lib/requirejs.php/-1/core/edit_switch.js',
'/lib/requirejs.php/-1/core/emoji/auto_complete.js',
'/lib/requirejs.php/-1/core/emoji/data.js',
'/lib/requirejs.php/-1/core/emoji/picker.js',
'/lib/requirejs.php/-1/core/event_dispatcher.js',
'/lib/requirejs.php/-1/core/first.js',
'/lib/requirejs.php/-1/core/form-autocomplete.js',
'/lib/requirejs.php/-1/core/fragment.js',
'/lib/requirejs.php/-1/core/fullscreen.js',
'/lib/requirejs.php/-1/core/icon_system.js',
'/lib/requirejs.php/-1/core/icon_system_fontawesome.js',
'/lib/requirejs.php/-1/core/inplace_editable.js',
'/lib/requirejs.php/-1/core/key_codes.js',
'/lib/requirejs.php/-1/core/loadingicon.js',
'/lib/requirejs.php/-1/core/local/aria/aria-hidden.js',
'/lib/requirejs.php/-1/core/local/aria/focuslock.js',
'/lib/requirejs.php/-1/core/local/aria/selectors.js',
'/lib/requirejs.php/-1/core/local/inplace_editable/events.js',
'/lib/requirejs.php/-1/core/local/modal/alert.js',
'/lib/requirejs.php/-1/core/local/reactive/basecomponent.js',
'/lib/requirejs.php/-1/core/local/reactive/debug.js',
'/lib/requirejs.php/-1/core/local/reactive/debugpanel.js',
'/lib/requirejs.php/-1/core/local/reactive/dragdrop.js',
'/lib/requirejs.php/-1/core/local/reactive/reactive.js',
'/lib/requirejs.php/-1/core/local/reactive/statemanager.js',
'/lib/requirejs.php/-1/core/localstorage.js',
'/lib/requirejs.php/-1/core/log.js',
'/lib/requirejs.php/-1/core/loglevel.js',
'/lib/requirejs.php/-1/core/menu_navigation.js',
'/lib/requirejs.php/-1/core/modal.js',
'/lib/requirejs.php/-1/core/modal_backdrop.js',
'/lib/requirejs.php/-1/core/modal_cancel.js',
'/lib/requirejs.php/-1/core/modal_events.js',
'/lib/requirejs.php/-1/core/modal_factory.js',
'/lib/requirejs.php/-1/core/modal_registry.js',
'/lib/requirejs.php/-1/core/modal_save_cancel.js',
'/lib/requirejs.php/-1/core/moremenu.js',
'/lib/requirejs.php/-1/core/mustache.js',
'/lib/requirejs.php/-1/core/network.js',
'/lib/requirejs.php/-1/core/normalise.js',
'/lib/requirejs.php/-1/core/notification.js',
'/lib/requirejs.php/-1/core/page_global.js',
'/lib/requirejs.php/-1/core/paged_content.js',
'/lib/requirejs.php/-1/core/paged_content_events.js',
'/lib/requirejs.php/-1/core/paged_content_factory.js',
'/lib/requirejs.php/-1/core/paged_content_pages.js',
'/lib/requirejs.php/-1/core/paged_content_paging_bar.js',
'/lib/requirejs.php/-1/core/paged_content_paging_bar_limit_selector.js',
'/lib/requirejs.php/-1/core/paged_content_paging_dropdown.js',
'/lib/requirejs.php/-1/core/pending.js',
'/lib/requirejs.php/-1/core/popover_region_controller.js',
'/lib/requirejs.php/-1/core/popper.js',
'/lib/requirejs.php/-1/core/prefetch.js',
'/lib/requirejs.php/-1/core/pubsub.js',
'/lib/requirejs.php/-1/core/reactive.js',
'/lib/requirejs.php/-1/core/sessionstorage.js',
'/lib/requirejs.php/-1/core/storagewrapper.js',
'/lib/requirejs.php/-1/core/str.js',
'/lib/requirejs.php/-1/core/templates.js',
'/lib/requirejs.php/-1/core/toast.js',
'/lib/requirejs.php/-1/core/tree.js',
'/lib/requirejs.php/-1/core/truncate.js',
'/lib/requirejs.php/-1/core/url.js',
'/lib/requirejs.php/-1/core/user_date.js',
'/lib/requirejs.php/-1/core/usermenu.js',
'/lib/requirejs.php/-1/core/utility.js',
'/lib/requirejs.php/-1/core/utils.js',
'/lib/requirejs.php/-1/core/yui.js',
'/lib/requirejs.php/-1/core_calendar/calendar.js',
'/lib/requirejs.php/-1/core_calendar/calendar_view.js',
'/lib/requirejs.php/-1/core_calendar/crud.js',
'/lib/requirejs.php/-1/core_calendar/drag_drop_data_store.js',
'/lib/requirejs.php/-1/core_calendar/events.js',
'/lib/requirejs.php/-1/core_calendar/modal_delete.js',
'/lib/requirejs.php/-1/core_calendar/modal_event_form.js',
'/lib/requirejs.php/-1/core_calendar/month_navigation_drag_drop.js',
'/lib/requirejs.php/-1/core_calendar/month_view_drag_drop.js',
'/lib/requirejs.php/-1/core_calendar/popover.js',
'/lib/requirejs.php/-1/core_calendar/repository.js',
'/lib/requirejs.php/-1/core_calendar/selectors.js',
'/lib/requirejs.php/-1/core_calendar/summary_modal.js',
'/lib/requirejs.php/-1/core_calendar/view_manager.js',
'/lib/requirejs.php/-1/core_course/actions.js',
'/lib/requirejs.php/-1/core_course/events.js',
'/lib/requirejs.php/-1/core_course/manual_completion_toggle.js',
'/lib/requirejs.php/-1/core_course/repository.js',
'/lib/requirejs.php/-1/core_course/view.js',
'/lib/requirejs.php/-1/core_courseformat/courseeditor.js',
'/lib/requirejs.php/-1/core_courseformat/local/content.js',
'/lib/requirejs.php/-1/core_courseformat/local/content/actions.js',
'/lib/requirejs.php/-1/core_courseformat/local/content/section.js',
'/lib/requirejs.php/-1/core_courseformat/local/content/section/cmitem.js',
'/lib/requirejs.php/-1/core_courseformat/local/content/section/header.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/contenttree.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/courseeditor.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/dndcmitem.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/dndsection.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/dndsectionitem.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/exporter.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseeditor/mutations.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseindex/cm.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseindex/courseindex.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseindex/drawer.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseindex/placeholder.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseindex/section.js',
'/lib/requirejs.php/-1/core_courseformat/local/courseindex/sectiontitle.js',
'/lib/requirejs.php/-1/core_editor/events.js',
'/lib/requirejs.php/-1/core_filters/events.js',
'/lib/requirejs.php/-1/core_form/changechecker.js',
'/lib/requirejs.php/-1/core_form/dynamicform.js',
'/lib/requirejs.php/-1/core_form/events.js',
'/lib/requirejs.php/-1/core_form/modalform.js',
'/lib/requirejs.php/-1/core_form/submit.js',
'/lib/requirejs.php/-1/core_form/util.js',
'/lib/requirejs.php/-1/core_message/message_drawer.js',
'/lib/requirejs.php/-1/core_message/message_drawer_events.js',
'/lib/requirejs.php/-1/core_message/message_drawer_helper.js',
'/lib/requirejs.php/-1/core_message/message_drawer_lazy_load_list.js',
'/lib/requirejs.php/-1/core_message/message_drawer_router.js',
'/lib/requirejs.php/-1/core_message/message_drawer_routes.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_contact.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_contacts.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_contacts_section_contacts.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_contacts_section_requests.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_conversation.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_conversation_constants.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_conversation_patcher.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_conversation_renderer.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_conversation_state_manager.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_group_info.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_overview.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_overview_section.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_search.js',
'/lib/requirejs.php/-1/core_message/message_drawer_view_settings.js',
'/lib/requirejs.php/-1/core_message/message_popover.js',
'/lib/requirejs.php/-1/core_message/message_repository.js',
'/lib/requirejs.php/-1/core_user/private_files.js',
'/lib/requirejs.php/-1/local_commander/commander.js',
'/lib/requirejs.php/-1/media_videojs/Youtube-lazy.js',
'/lib/requirejs.php/-1/media_videojs/loader.js',
'/lib/requirejs.php/-1/media_videojs/video-lazy.js',
'/lib/requirejs.php/-1/message_popup/notification_area_events.js',
'/lib/requirejs.php/-1/message_popup/notification_popover_controller.js',
'/lib/requirejs.php/-1/message_popup/notification_repository.js',
'/lib/requirejs.php/-1/mod_forum/discussion_list.js',
'/lib/requirejs.php/-1/mod_forum/forum_events.js',
'/lib/requirejs.php/-1/mod_forum/repository.js',
'/lib/requirejs.php/-1/mod_forum/selectors.js',
'/lib/requirejs.php/-1/mod_forum/subscription_toggle.js',
'/lib/requirejs.php/-1/theme_boost/aria.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/alert.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/button.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/carousel.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/collapse.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/dropdown.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/modal.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/popover.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/scrollspy.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/tab.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/toast.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/tools/sanitizer.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/tooltip.js',
'/lib/requirejs.php/-1/theme_boost/bootstrap/util.js',
'/lib/requirejs.php/-1/theme_boost/drawer.js',
'/lib/requirejs.php/-1/theme_boost/drawers.js',
'/lib/requirejs.php/-1/theme_boost/footer-popover.js',
'/lib/requirejs.php/-1/theme_boost/form-display-errors.js',
'/lib/requirejs.php/-1/theme_boost/index.js',
'/lib/requirejs.php/-1/theme_boost/loader.js',
'/lib/requirejs.php/-1/theme_boost/pending.js',
'/lib/requirejs.php/-1/theme_boost/popover.js',
'/lib/requirejs.php/-1/tool_usertours/events.js',
'/lib/requirejs.php/-1/tool_usertours/filter_cssselector.js',
'/lib/requirejs.php/-1/tool_usertours/repository.js',
'/lib/requirejs.php/-1/tool_usertours/tour.js',
'/lib/requirejs.php/-1/tool_usertours/usertours.js',
'/local/commander/styles.css',
'/theme/yui_combo.php?3.17.2/datatype-xml-parse/datatype-xml-parse.js&3.17.2/io-xdr/io-xdr.js&3.17.2/io-form/io-form.js&3.17.2/io-upload-iframe/io-upload-iframe.js&3.17.2/queue-promote/queue-promote.js&3.17.2/io-queue/io-queue.js',
'/theme/yui_combo.php?3.17.2/event-mousewheel/event-mousewheel.js&3.17.2/event-resize/event-resize.js&3.17.2/event-hover/event-hover.js&3.17.2/event-touch/event-touch.js&3.17.2/event-move/event-move.js&3.17.2/event-flick/event-flick.js&3.17.2/event-valuechange/event-valuechange.js&3.17.2/event-tap/event-tap.js',
'/theme/yui_combo.php?3.17.2/json-stringify/json-stringify.js&2in3/2.9.0/build/yui2-animation/yui2-animation.js',
'/theme/yui_combo.php?m/-1/core/event/event-debug.js&m/-1/filter_mathjaxloader/loader/loader-debug.js',
'/theme/yui_combo.php?m/-1/course/categoryexpander/categoryexpander-debug.js',
'/theme/yui_combo.php?m/-1/course/coursebase/coursebase-debug.js',
'/theme/yui_combo.php?rollup/3.17.2/yui-moodlesimple.css',
];

const CACHE_NAME = 'moodle-cache-v1';

self.addEventListener('install', event => {
console.log('Service worker installing...');

// Add all files to cache
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(JS_FILES))
.then(() => self.skipWaiting())
);
});

self.addEventListener('activate', event => {
console.log('Service worker activating...');

// Remove any previous caches
event.waitUntil(
caches.keys()
.then(cacheNames => {
return Promise.all(
cacheNames.filter(name => name !== CACHE_NAME)
.map(name => caches.delete(name))
);
})
.then(() => self.clients.claim())
);
});

self.addEventListener('fetch', event => {
if (event.request.method !== "GET") return;

event.respondWith(
caches.match(event.request)
.then(response => {
if (response) {
// console.log('Cached response for ' + event.request.url);
return response;
}

// console.log('Get response for ' + event.request.url);
return fetch(event.request);
})
);
});

