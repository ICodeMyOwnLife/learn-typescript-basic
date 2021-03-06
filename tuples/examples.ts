export type T1 = [boolean, string, number];
export const t1: T1 = [false, "a", 1];
export const f1 = (...args: T1) => {
  console.log(args);
};

/**
 * [Labeled Tuple Elements](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#labeled-tuple-elements)
 */
export type T2 = [x: number, y: number] | [x: number, y: number, z: number];
export const f2 = (...args: T2) => {
  console.log(args);
};
f2(1, 2);
f2(1, 2, 3);

export type T3 = [number, string, boolean?];
export const t3_1: T3 = [1, "a"];
export const t3_2: T3 = [1, "a", false];
export const f3 = (...args: T3) => {
  const a_2 = args[2];
  console.log(a_2);
};

export type T4 = [a: number, b: string, c?: boolean];
export const f4 = (...args: T4) => {
  const c = args[2];
  console.log(c);
};
f4(1, "a");
f4(1, "a", false);

export type T5 = [number, boolean?, ...string[]];
export const t5_1: T5 = [1];
export const t5_2: T5 = [1, false];
export const t5_3: T5 = [1, false, "a"];
export const t5_4: T5 = [1, false, "a", "b"];
export const f5 = (...args: T5) => {
  const s = args[3];
  console.log(s);
};

export type T6 = [a: number, b?: boolean, ...c: string[]];
export const f6 = (...args: T6) => {
  const b = args[1];
  const c = args[2];
  console.log(b, c);
};
f6(1);
f6(1, false);
f6(1, false, "a");
f6(1, false, "a", "b");

/**
 * [Leading/Middle Rest Elements in Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#leadingmiddle-rest-elements-in-tuple-types)
 */
export type T7 = [a: number, ...b: boolean[], c: string];
export const f7 = (...args: T7) => {
  const a1 = args[1];
  const a2 = args[2];
  console.log(a1, a2);
};
f7(1, "a");
f7(1, false, "a");
f7(4, false, false, "a");

export type T8 = [...a: number[], b: boolean, c: string];
export const f8 = (...args: T8) => {
  const a0 = args[0];
  const a1 = args[1];
  console.log(a0, a1);
};
f8(false, "a");
f8(1, false, "a");
f8(1, 2, false, "a");

/**
 * [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
 */
export const concat = <
  TArr1 extends ReadonlyArray<any>,
  TArr2 extends ReadonlyArray<any>
>(
  arr1: TArr1,
  arr2: TArr2
): [...TArr1, ...TArr2] => [...arr1, ...arr2];
concat([1, 2, 3], [4, 5, 6]);
concat([1, 2, 3] as const, [4, 5, 6] as const);

export const tail = <TArr extends ReadonlyArray<any>>(
  arr: readonly [any, ...TArr]
) => {
  const [_, ...tail] = arr;
  return tail;
};
tail([1, 2, 3]);
tail([1, 2, 3] as const);

export const curry = <
  THeadArgs extends ReadonlyArray<any>,
  TTailArgs extends ReadonlyArray<any>,
  TResult
>(
  f: (...args: [...THeadArgs, ...TTailArgs]) => TResult,
  ...headArgs: THeadArgs
) => (...tailArgs: TTailArgs) => f(...headArgs, ...tailArgs);
declare const doSth: (a: string, b: number, c: boolean, d: Symbol) => string;
const curriedFn1 = curry(doSth);
curriedFn1("a", 1, false, Symbol());
const curriedFn2 = curry(doSth, "a");
curriedFn2(1, false, Symbol());
const curriedFn3 = curry(doSth, "a", 1);
curriedFn3(false, Symbol());
