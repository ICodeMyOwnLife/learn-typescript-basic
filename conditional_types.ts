import { ComponentType, ReactElement, Component } from "react";

/**
 * Conditional Type and Type Inference in Conditional Type
 * References:
 *  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types
 *  https://mariusschulz.com/blog/typescript-2-8-conditional-types
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
 * ResolveType<T>
 */
export type ResolveType<T> = T extends Promise<infer TResolve>
  ? TResolve
  : never;

export type RT0 = ResolveType<Promise<() => boolean>>;
export type RT1 = ResolveType<string[]>;

/**
 * ComponentProps<T>
 */
export type ComponentProps<T> = T extends ComponentType<infer TProps>
  ? TProps
  : never;

export type CProps0 = ComponentProps<
  (props: { a: number; b: string }) => ReactElement<any> | null
>;

export class Comp1 extends Component<{ c: boolean; d: Function }> {}
export type CProps1 = ComponentProps<typeof Comp1>;

/**
 * ValueTypes<T>
 */
export type ValueTypes<T> = T extends { [key in keyof T]: infer TValue }
  ? TValue
  : never;

export type V0 = ValueTypes<{ a: number; b: string; c: Function }>;

/**
 * IsOptional<T>
 */
export type IsOptional<T> = undefined | null extends T
  ? true
  : undefined extends T
  ? true
  : null extends T
  ? true
  : false;

export type IO0 = IsOptional<undefined>;
export type IO1 = IsOptional<null>;
export type IO2 = IsOptional<number>;
export type IO3 = IsOptional<number | null>;
export type IO4 = IsOptional<number | undefined>;
export type IO5 = IsOptional<never>;
export type IO6 = IsOptional<any>;
export type IO7 = IsOptional<unknown>;

/**
 * RequiredPropNames<T>
 */
export type RequiredPropNames<T> = NonNullable<
  { [K in keyof T]: IsOptional<T[K]> extends true ? never : K }[keyof T]
>;

export type RP0 = RequiredPropNames<{
  a: string;
  b?: number;
  c: boolean | null;
  d: any;
  e: unknown;
}>;

/**
 * OptionalPropNames<T>
 */
export type OptionalPropNames<T> = Exclude<keyof T, RequiredPropNames<T>>;

export type OP0 = OptionalPropNames<{
  a: string;
  b?: number;
  c: boolean | null;
  d: any;
  e: unknown;
}>;

/**
 * First<T>
 * Note that the inferred type variables can only be used in the true branch of the conditional type.
 */
export type First<T> = T extends [infer TFirst, ...unknown[]] ? TFirst : never;

export type F0 = First<[string, number, boolean]>;
export type F1 = First<string[]>;
export type F2 = First<number>;

/**
 * FirstParam<T>
 */
export type FirstParam<T extends (...args: any[]) => any> = First<
  Parameters<T>
>;

export type FP0 = FirstParam<(a: number, b: string) => boolean>;
export type FP1 = FirstParam<() => void>;
export type FP2 = FirstParam<(...args: any[]) => void>;

/**
 * Omit<T, K>: Exclude from T those properties that are assignable to K
 */
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type O0 = Omit<{ a: number; b: string }, "a">;

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
