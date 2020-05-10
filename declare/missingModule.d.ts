// Must be at the top level
declare module "some-missing-module" {
  // Must import inside of module declaration
  import { ReadStream } from "fs";
  export const readAsStream: (url: string) => ReadStream;
}
