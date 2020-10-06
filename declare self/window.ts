declare const self: Window;

self.addEventListener("storage", ({ storageArea, key, oldValue, newValue }) =>
  console.log(storageArea, key, oldValue, newValue)
);

/**
 * In order to make `declare const self` work we have to convert the file to ES module by using `import` or `export`
 */
export {};
