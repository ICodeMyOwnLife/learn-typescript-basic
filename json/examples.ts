/**
 * References:
 * https://mariusschulz.com/blog/importing-json-modules-in-typescript
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#new---resolvejsonmodule
 */

import products from "./products.json";

products.forEach(({ id, manufacturedAt, name, quantity }) =>
  console.log(id, manufacturedAt, name, quantity)
);
