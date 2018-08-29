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

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function(response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
          var responseToCache = response.clone();

          caches.open(cacheName)
              .then(function (cache) {
                  cache.put(event.request, responseToCache);
              });

          return response;
      });
    })
  );
});
