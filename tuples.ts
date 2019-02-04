/**
 * References:
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
 */

/**
 * Rest parameters with tuple types
 */
export function ft0(...args: [number, string, boolean]) {
  console.log(...args);
}
// Equivalent to
export function f0(args_0: number, args_1: string, args_2: boolean) {
  console.log(args_0, args_1, args_2);
}

/**
 * Spread expressions with tuple types
 */
const ft0Args = tuple(1, "a", false);
ft0(...ft0Args);
// Equivalent to
ft0(0, "a", false);
ft0(ft0Args[0], ft0Args[1], ft0Args[2]);

/**
 * Generic rest parameters
 */
export function curry<TFirstArg, TRestArgs extends any[], TResult>(
  fn: (x: TFirstArg, ...args: TRestArgs) => TResult,
  x: TFirstArg
) {
  return fn.bind(null, x);
}

function fCurry0(a: number, b: string, c: boolean) {
  console.log(a, b, c);
}

const fCurry1 = curry(fCurry0, 5);
const fCurry2 = curry(fCurry1, "a");
const fCurry3 = curry(fCurry2, false);

fCurry0(5, "a", false);
fCurry1("a", false);
fCurry2(false);
fCurry3();

/**
 * Optional elements in tuple types
 */
let t0: [number, string?, boolean?];
t0 = [5, "a", false];
t0 = [5, "a"];
t0 = [5];
console.log(t0);

/**
 * Rest elements in tuple types
 */
function tuple<T extends any[]>(...args: T) {
  return args;
}

tuple(5, "a", false);
const a0 = [1, 2, 3];
let tr0 = tuple("b", ...a0);
tr0 = ["b"];
tr0 = ["b", 1];
tr0 = ["b", ...a0];
console.log(tr0);
