// Must be at the top level
declare module "some-missing-module" {
  // Must import inside of module declaration
  import { ReadStream } from "fs";
  export const readAsStream: (url: string) => ReadStream;
}

declare module "memorystore" {
  import session, { MemoryStore } from "express-session";

  const memoryStore: (s: typeof session) => typeof MemoryStore;
  export default memoryStore;
}