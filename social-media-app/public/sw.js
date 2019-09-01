var appVersion = 10;
var CACHE = {
  STATIC_NAME: `static-v${appVersion}`,
  DYNAMIC_NAME: `dynamic-v${appVersion}`
}

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker...', event)

  event.waitUntil(
    caches.open(CACHE.STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Pre Caching App Shell')

        // O método "add" obtém o arquivo do servidor e adiciona ao cache
        // (é simular ao combo de fetch + cache.put)
        cache.addAll([
          '/',
          '/index.html',
          '/offline.html',
          '/src/js/app.js',
          '/src/js/feed.js',
          '/src/js/polyfills/fetch.js',
          '/src/js/polyfills/promise.js',
          '/src/js/material.min.js',
          '/src/css/app.css',
          '/src/css/feed.css',
          '/src/images/main-image.jpg',
          'https://fonts.googleapis.com/css?family=Roboto:400,700',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
        ])

      })
      .catch(function (err) {
        console.log(`erro`, err)
      })
  )
})

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker.s..', event)
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE.STATIC_NAME && key !== CACHE.DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        }))
      })
  )
  return self.clients.claim();
})

/**
 * Cache then Network Strategy
 */
self.addEventListener('fetch', function (event) {
  const url = 'http://httpbin.org/get';

  if (event.request.url.indexOf(url) > -1) {
    event.respondWith(
      caches.open(CACHE.DYNAMIC_NAME)
        .then(function (cache) {
          return fetch(event.request)
            .then(function (response) {
              cache.put(event.request, response.clone());
              return response;
            })
        })
    )
  } else {
    event.respondWith(
      caches
        .match(event.request)
        .then(function (response) {
          if (response) {
            console.log('[Service Worker] Found in cache', event.request.url);
            return response;
          }

          console.log('[Service Worker] Fetching from origin', event.request.url);

          return fetch(event.request)
            .then(function (originResponse) {
              caches.open(CACHE.DYNAMIC_NAME)
                .then(function (cache) {
                  cache.put(event.request.url, originResponse.clone())
                  return originResponse;
                })
            })
            .catch(function (err) {
              return caches.open(CACHE.STATIC_NAME)
                .then(function (cache) {
                  return cache.match('/offline.html');
                })
            });
        })
    )
  }
})

/**
 * Cache with Network Fallback Strategy
 */
// self.addEventListener('fetch', function (event) {
//   // console.log('[Service Worker] Intercepting request for something...', event.request.url);

//   // Mantém o comportamento padrão
//   // event.respondWith(fetch(event.request));

//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(function (response) {
//         if (response) {
//           console.log('[Service Worker] Found in cache', event.request.url);
//           return response;
//         }

//         console.log('[Service Worker] Fetching from origin', event.request.url);

//         return fetch(event.request)
//           .then(function (originResponse) {
//             caches.open(CACHE.DYNAMIC_NAME)
//               .then(function (cache) {
//                 cache.put(event.request.url, originResponse.clone())
//                 return originResponse;
//               })
//           })
//           .catch(function (err) {
//             return caches.open(CACHE.STATIC_NAME)
//               .then(function (cache) {
//                 return cache.match('/offline.html');
//               })
//           });
//       })
//   )
// })

/**
 * Network with Cache (with dynamic caching) Fallback Strategy
 */
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     fetch(event.request)
//       .then(function (originResponse) {
//         caches.open(CACHE.DYNAMIC_NAME)
//           .then(function (cache) {
//             cache.put(event.request.url, originResponse.clone())
//             return originResponse;
//           })
//       })
//       .catch(function (err) {
//         return caches.match(event.request);
//       })
//   )
// })

/**
 * Cache Only Strategy
 */
// self.addEventListener('fetch', function (event) {
//   // console.log('[Service Worker] Intercepting request for something...', event.request.url);

//   event.respondWith(
//     caches.match(event.request)
//   )
// })

/**
 * Network Only Strategy
 */
// self.addEventListener('fetch', function (event) {
//   // console.log('[Service Worker] Intercepting request for something...', event.request.url);

//   event.respondWith(
//     fetch(event.request)
//   )
// })
