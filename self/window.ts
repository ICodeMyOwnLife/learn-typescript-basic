// This exists only to make `declare const self` work by converting the file to ES module
import {} from "./window";

declare const self: Window;

self.addEventListener("storage", ({ storageArea, key, oldValue, newValue }) =>
  console.log(storageArea, key, oldValue, newValue)
);
