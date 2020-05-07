/**
 * In order to make `declare const self` work we have to convert the file to ES module by using `import` or `export`
 */
import {} from "./serviceWorker";

declare const self: ServiceWorkerGlobalScope;

self.addEventListener("install", (e) => {
  e.waitUntil(
    self.caches.open("v1").then((cache) => {
      return cache.addAll([
        "./sw-test/",
        "./sw-test/index.html",
        "./sw-test/style.css",
        "./sw-test/app.js",
        "./sw-test/image-list.js",
        "./sw-test/star-wars-logo.jpg",
        "./sw-test/gallery/",
        "./sw-test/gallery/bountyHunters.jpg",
        "./sw-test/gallery/myLittleVader.jpg",
        "./sw-test/gallery/snowTroopers.jpg",
      ]);
    })
  );
});

self.addEventListener("fetch", async (e) => {
  if (e.request.method !== "GET") return;
  const res =
    (await self.caches.match(e.request)) || (await self.fetch(e.request));
  e.respondWith(res);
});
