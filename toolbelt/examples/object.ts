import { hasOwnProperty } from "../src/object";

export const isPromise = (promise: unknown): promise is Promise<unknown> =>
  promise instanceof Object &&
  hasOwnProperty(promise, "then") &&
  typeof promise.then === "function";

const logAsync1 = async (o: Promise<number> | number) => {
  const value = isPromise(o) ? await o : o;
  console.log(value);
};

const logAsync2 = async (o: Promise<number> | number) => {
  const value = await Promise.resolve(o);
  console.log(value);
};
