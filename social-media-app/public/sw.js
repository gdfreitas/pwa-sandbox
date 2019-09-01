var appVersion = 10;
var CACHE = {
  STATIC_NAME: `static-v${appVersion}`,
  DYNAMIC_NAME: `dynamic-v${appVersion}`
}

var STATIC_FILES = [
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
]

// function trimCache(cacheName, maxItems) {
//   caches.open(cacheName)
//     .then(function (cache) {
//       return cache.keys()
//         .then(function (keys) {
//           if (keys.length > maxItems) {
//             return cache.delete(keys[0])
//               .then(trimCache(cacheName, maxItems))
//           }
//         })
//     })
// }

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker...', event)

  event.waitUntil(
    caches.open(CACHE.STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Pre Caching App Shell')

        // O método "add" obtém o arquivo do servidor e adiciona ao cache
        // (é simular ao combo de fetch + cache.put)
        cache.addAll(STATIC_FILES)

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

function isInArray(string, array) {
  var cachePath;
  // request targets domain where we serve the page from (i.e. NOT a CDN)
  if (string.indexOf(self.origin) === 0) {
    console.log('matched ', string);
    // take the part of the URL AFTER the domain (e.g. after localhost:8080)
    cachePath = string.substring(self.origin.length);
  } else {
    // store the full request (for CDNs)
    cachePath = string;
  }
  return array.indexOf(cachePath) > -1;
}

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
              // trimCache(CACHE.DYNAMIC_NAME, 3);
              cache.put(event.request, response.clone());
              return response;
            })
        })
    )

  } else if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(caches.match(event.request))
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
                  // trimCache(CACHE.DYNAMIC_NAME, 3);
                  cache.put(event.request.url, originResponse.clone())
                  return originResponse;
                })
            })
            .catch(function (err) {
              return caches.open(CACHE.STATIC_NAME)
                .then(function (cache) {
                  if (event.request.headers.get('accept').includes('text/html')) {
                    return cache.match('/offline.html');
                  }
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
