var cacheName = 'NomeApp-v';
var filesToCache = [
    './',
    './index.html',
    './manifest.json'
];
self.addEventListener('install', function(ef) {
  ef.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('fetch', function(ed) {
  ed.respondWith(
    caches.match(ed.request).then(function(response) {
      return response || fetch(ed.request);
    })
  );
});