/**
 * In order to make `declare const self` work we have to convert the file to ES module by using `import` or `export`
 */
import {} from "./dedicatedWebWorker";

declare const self: DedicatedWorkerGlobalScope;

self.importScripts("//unpkg.com/browse/leaflet@1.6.0/dist/leaflet.js");

self.addEventListener("message", ({ data }) => {
  console.log(data);
  self.postMessage("I LOVE YOU");
});

self.addEventListener(
  "error",
  ({ error, colno, lineno, filename, message, timeStamp }) =>
    console.log(error, colno, lineno, filename, message, timeStamp)
);
