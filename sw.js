const files = [
  'runtime-es2015.2e6f808ada0efb30a6d2.js',
  'runtime-es5.2e6f808ada0efb30a6d2.js',
  'polyfills-es2015.5b10b8fd823b6392f1fd.js',
  '5-es2015.0f5e0f7796d7ba3cf8a9.js',
  '5-es5.0f5e0f7796d7ba3cf8a9.js',
  '6-es2015.84ec39b3d14e4332f6d6.js',
  '6-es5.84ec39b3d14e4332f6d6.js',
  'polyfills-es5.8e50a9832860f7cf804a.js',
  'main-es2015.53c34bb03dfcf446037a.js',
  'main-es5.53c34bb03dfcf446037a.js',
  'styles.01ba17338c039eed6055.css',
  'index.html',
  '/',
  '/books'
];

caches
  .open('appshell')
  .then(cache => cache.addAll(files))
  .then(() => self.skipWaiting());

self.addEventListener('fetch', e => {
  console.log(e);
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
self.addEventListener('push', e => console.log(e));
self.addEventListener('activate', e => console.log(e));
self.addEventListener('install', e => console.log(e));
