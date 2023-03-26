const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v2");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/style.css",

            // …

            // include other new resources for the new version…
        ])
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(async function () {
        try {
            var res = await fetch(event.request);
            var cache = await caches.open('cache');
            cache.put(event.request.url, res.clone());
            return res;
        }
        catch (error) {
            return caches.match(event.request);
        }
    }());
});