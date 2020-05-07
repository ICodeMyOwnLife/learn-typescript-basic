// This exists only to make `declare const self` work by converting the file to ES module
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
