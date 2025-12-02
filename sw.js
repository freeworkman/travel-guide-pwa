const CACHE_NAME = 'travel-guide-v1';
const urlsToCache = [
  './',
  './全球旅遊嚮導V1_1.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.log('某些資源無法緩存（可能因為遠程資源）:', err);
      });
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      return new Response('離線模式：無法載入資源', { status: 503 });
    })
  );
});
