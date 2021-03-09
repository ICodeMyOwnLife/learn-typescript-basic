/**
 * References:
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#mapped-types
 */

/********************************************************************
 ***** Custom types
 *******************************************************************/

/**
 * OmitFrom<TSource, TKey>
 */
export type OmitFrom<TSource, TKey extends keyof TSource> = Omit<TSource, TKey>;

// Examples
export type OF1 = OmitFrom<Object, "hasOwnProperty" | "isPrototypeOf">;
export type OF2 = OmitFrom<Function, "apply" | "bind" | "call">;

/**
 * Proxify<TSource>
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#mapped-types
 */

export type Proxify1<TSource> = {
  [k in keyof TSource]: {
    get: () => TSource[k];
    set: (value: TSource[k]) => void;
  };
};

// Examples
export type Pr1 = Proxify1<{ a: number; b: string }>;

/**
 * Deferred<TValue>
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#mapped-types-on-tuples-and-arrays
 */
export type Deferred<TValue> = { [K in keyof TValue]: Promise<TValue[K]> };

// Examples
export type D0 = Deferred<{ a: number; b: string }>;
export type D1 = Deferred<number[]>;
export type D2 = Deferred<[number, number, number]>;

/**
 * MutableRequired<TSource>
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers
 */
export type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };

// Examples
export type MR0 = MutableRequired<{
  readonly a: number;
  readonly b?: string;
  c?: Function;
}>;

/**
 * ReadonlyPartial<TSource>
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers
 */
export type ReadonlyPartial<T> = { readonly [K in keyof T]?: T[K] };

// Examples
export type RP0 = ReadonlyPartial<{
  a: number;
  b: string;
  readonly c?: Function;
}>;

/********************************************************************
 ***** Built-in types
 *******************************************************************/

/**
 * Partial<TSource>: Make all properties in TSource optional
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick
 */
export type P0 = Partial<{ a: number; b: string; c?: Function }>;

/**
 * Required<TSource>: Make all properties in TSource required
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers
 */
export type R0 = Required<{ a?: number; b?: string; c: Function }>;

/**
 * Readonly<TSource>: Make all properties in TSource readonly
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick
 */
export type RO0 = Readonly<{ a?: number; b?: string; readonly c: Function }>;

/**
 * Pick<TSource, TKey>: From TSource, pick a set of properties whose keys are in the union TKey
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick
 */
export type Pi0 = Pick<{ a: number; b: string; c: Function }, "a" | "b">;

/**
 * Record<TKey, TValue>: Construct a type with a set of properties TKey of type TValue
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick
 */
export type Re0 = Record<"a" | "b" | "c", number>;

/**
 * Omit<TSource, TKey>: Construct a type with the properties of TSource except for those in type TKey
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type
 */
export type Om0 = Omit<Object, "constructor" | "hasOwnProperty">;

/**
 * [Key Remapping in Mapped Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)
 */
type PropEventSource<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (
    callback: (newValue: T[K]) => void
  ) => void;
};
declare function makeWatchedObject<T>(o: T): T & PropEventSource<T>;
const obj3 = makeWatchedObject({ name: "Peter", yob: 2003 });
obj3.onNameChange(newName => console.log(newName, obj3.name));
obj3.onYobChange(newYob => console.log(newYob, obj3.yob));

type Getter<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type Setter<T> = {
  [K in keyof T as `set${Capitalize<string & Exclude<K, "kind">>}`]: (
    value: T[K]
  ) => void;
};
type Proxify2<T> = Getter<T> & Setter<T>;
declare function proxify<T>(o: T): Proxify2<T>;
const p = proxify({ kind: "point", x: 4, y: 8 });
console.log(p.getX(), p.getY(), p.getKind());
p.setX(6);
p.setY(12);
p.setKind("square");
