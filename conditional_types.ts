/**
 * Reference: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types
 */

/**
 * TypeName<T>
 */
export type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : T extends Symbol
  ? "symbol"
  : T extends bigint
  ? "bigint"
  : "object";

export type TN0 = TypeName<string>;
export type TN1 = TypeName<"string">;
export type TN2 = TypeName<number>;
export type TN3 = TypeName<0>;
export type TN4 = TypeName<boolean>;
export type TN5 = TypeName<false>;
export type TN6 = TypeName<undefined>;
export type TN7 = TypeName<Function>;
export type TN8 = TypeName<() => {}>;
export type TN9 = TypeName<object>;
export type TN10 = TypeName<{}>;
export type TN11 = TypeName<number[]>;
export type TN12 = TypeName<null>;
export type TN13 = TypeName<string | (() => string)>;
export type TN14 = TypeName<number[] | {}>;
export type TN15 = TypeName<symbol>;
export type TN16 = TypeName<Symbol>;
export type TN17 = TypeName<bigint>;
const a = typeof Symbol();

/**
 * FunctionPropertyNames & FunctionProperties
 */
export type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];
export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

export type FPN0 = FunctionPropertyNames<{
  a: number;
  b: () => void;
  c: Function;
}>;
export type FN0 = FunctionProperties<{ a: number; b: () => void; c: Function }>;

/**
 * NonFunctionPropertyNames & NonFunctionProperties
 */
export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type NFPN0 = NonFunctionPropertyNames<{
  a: number;
  b: () => void;
  c: Function;
}>;
export type NFP0 = NonFunctionProperties<{
  a: number;
  b: () => void;
  c: Function;
}>;

/**
 * ElementType<T>
 */
export type ElementType<T> = T extends (infer TElement)[] ? TElement : never;

export type E0 = ElementType<number[]>;
export type E1 = ElementType<[number, string]>;
export type E2 = ElementType<{ a: number }>;

/**
 * ValueTypes<T>
 */
type ValueTypes<T> = T extends { [key in keyof T]: infer TValue }
  ? TValue
  : never;

export type V0 = ValueTypes<{ a: number; b: string; c: Function }>;

/**
 * Exclude<T, U>: Exclude from T those types that are assignable to U
 */
export type Exc0 = Exclude<0 | 1 | 2 | 4, 2 | 4 | 8>;

/**
 * Extract<T, U>: Extract from T those types that are assignable to U
 */
export type Ext0 = Extract<0 | 1 | 2 | 4, 2 | 4 | 8>;

/**
 * NonNullable<T>: Exclude null and undefined from T
 */
export type N0 = NonNullable<string | undefined>;
export type N1 = NonNullable<number | null>;

/**
 * Parameters<T>: Obtain the parameters of a function type in a tuple
 */
export type P0 = Parameters<(a: number, b: string, c?: Function) => boolean>;

/**
 * ConstructorParameters<T>: Obtain the parameters of a constructor function type in a tuple
 */
export type CP0 = ConstructorParameters<
  new (a: boolean, b: object, c?: any[]) => object
>;

/**
 * ReturnType<T>: Obtain the return type of a function type
 */
export type R0 = ReturnType<(...args: any[]) => boolean>;

/**
 * InstanceType<T>: Obtain the return type of a constructor function type
 */
export type I0 = InstanceType<typeof Promise>;
