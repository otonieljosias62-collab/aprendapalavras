const CACHE_NAME = 'apre-conmigo-v1';
const urlsToCache = [
  '/aprendapalavras/',
  '/aprendapalavras/index.html',
  '/aprendapalavras/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
