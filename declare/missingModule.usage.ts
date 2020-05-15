import { readAsStream } from "some-missing-module";
import session from "express-session";
import memorystore from "memorystore";

console.log(readAsStream("http://abc.com"));

const MemoryStore = memorystore(session);
const store = new MemoryStore();
console.log(store.length);
