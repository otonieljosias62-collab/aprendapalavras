const CACHE_NAME = 'flashcards-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Garante que o aplicativo busque alterações recentes diretamente da rede (GitHub)
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
