const CACHE_NAME = 'moodle-cache';
const URLS_TO_CACHE = [
    /\/lib\/requirejs\.php\/-1\/core/,
    /\/lib\/requirejs\.php\/-1\/theme_boost/,
    /\/lib\/requirejs\.php\/-1\/message_/,
    /\/lib\/requirejs\.php\/-1\/media_videojs/,
    /\/theme\/yui_combo\.php/,
    /\/lib\/requirejs\.php\/-1\/block_recentlyaccessedcourses/,
    /\/lib\/requirejs\.php\/-1\/block_online_users/,
    /\/lib\/requirejs\.php\/-1\/local_commander/,
    /\/lib\/requirejs\.php\/-1\/block_myoverview/,
    /\/lib\/requirejs\.php\/-1\/block_timeline/,
    /\/lib\/javascript\.php\/-1\/lib\//,
    /\/lib\/javascript\.php\/-1\/course\/dndupload/
];
console.log('tool_developer - static-worker.js - v1.0.0');

self.addEventListener('fetch', event => {

    const url = new URL(event.request.url);
    if (!URLS_TO_CACHE.some(regex => regex.test(url.pathname))) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME)
            .then(cache => cache.match(event.request))
            .then(response => {
                if (response) {
                    console.debug(`Cache hit: ${url.pathname}`);
                    return response;
                }

                console.debug(`Cache miss: ${url.pathname}`);
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            console.debug(`Invalid response: ${url.pathname}`);
                            return response;
                        }

                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                console.debug(`Adding response to cache: ${url.pathname}`);
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});
