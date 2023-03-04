const cacheName = 'moodle-cache';

// When a JavaScript file is requested, check the cache first and return it if it's there
// Otherwise, fetch it from the network and add it to the cache
self.addEventListener('fetch', event => {

    // Check if the request is for a JavaScript file
    if (!event.request.url.endsWith('.js')) {
        return;
    }


    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request))
            .then(response => {
                if (response) {
                    // Cache hit - return response
                    console.log(`Cache hit: ${event.request.url}`);
                    return response;
                }

                // Cache miss - fetch from network
                console.log(`Cache miss: ${event.request.url}`);
                return fetch(event.request)
                    .then(response => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            console.log(`Invalid response: ${event.request.url}`);
                            return response;
                        }

                        // Clone the response and add it to the cache
                        const responseToCache = response.clone();
                        caches.open(cacheName)
                            .then(cache => {
                                console.log(`Adding response to cache: ${event.request.url}`);
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});
