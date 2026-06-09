const CACHE = 'haneffe-v2';
const ASSETS = ['/haneffe/', '/haneffe/index.html', '/haneffe/manifest.json', '/haneffe/icon.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
