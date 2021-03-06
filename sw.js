let cacheName = "restaurant-info";

self.addEventListener("install", event => {
  let urlsToCache = [
    "/",
    "./index.html",
    "./restaurant.html",
    "./css/styles.css",
    "./js/dbhelper.js",
    "./js/main.js",
    "./js/restaurant_info.js",
    "./data/restaurants.json",
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
    "./img/10.jpg"
  ];
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch',
  function (event) {
    event.respondWith(
      caches.match(event.request)
      .then(
        function (response) {
          if (response !== undefined) {
            return response;
          } else {
            return fetch(event.request).then(
              function (response) {
                let responseClone = response.clone();

                caches.open(cacheName)
                  .then(
                    function (cache) {
                      cache.put(event.request, responseClone);
                    }
                  );
                return response;
              }
            );
          }
        }
      ) // end of promise for cache match

    ); // end of respond with

  }
);