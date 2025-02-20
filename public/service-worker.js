// public/service-worker.js
self.addEventListener("install", (event) => {
    console.log("Service Worker 설치됨");
    event.waitUntil(
        caches.open("app-cache").then((cache) => {
            return cache.addAll(["/", "/offline"]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).catch(() => caches.match("/offline"));
        })
    );
});
