/**
 * References:
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#mapped-types-on-tuples-and-arrays
 */

/**
 * MapToPromise<T>
 */
export type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };

export type MP0 = MapToPromise<{ a: number; b: string }>;
export type MP1 = MapToPromise<number[]>;
export type MP2 = MapToPromise<[number, number, number]>;

/**
 * MutableRequired<T>
 */
export type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };

export type MR0 = MutableRequired<{
  readonly a: number;
  readonly b?: string;
  c?: Function;
}>;

/**
 * ReadonlyPartial<T>
 */
export type ReadonlyPartial<T> = { readonly [K in keyof T]?: T[K] };

export type RP0 = ReadonlyPartial<{
  a: number;
  b: string;
  readonly c?: Function;
}>;

/**
 * Partial<T>: Make all properties in T optional
 */
export type P0 = Partial<{ a: number; b: string; c?: Function }>;

/**
 * Required<T>: Make all properties in T required
 */
export type R0 = Required<{ a?: number; b?: string; c: Function }>;

/**
 * Readonly<T>: Make all properties in T readonly
 */
export type RO0 = Readonly<{ a?: number; b?: string; readonly c: Function }>;

/**
 * Pick<T, K>: From T, pick a set of properties whose keys are in the union K
 */
export type Pi0 = Pick<{ a: number; b: string; c: Function }, "a" | "b">;

/**
 * Record<K, T>: Construct a type with a set of properties K of type T
 */
export type Re0 = Record<"a" | "b" | "c", number>;
