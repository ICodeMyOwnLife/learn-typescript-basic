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
  [K in keyof T]: T[K] extends Function ? K : never;
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
  [K in keyof T]: T[K] extends Function ? never : K;
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

export type ET0 = ElementType<number[]>;
export type ET1 = ElementType<[number, string]>;
export type ET2 = ElementType<{ a: number }>;

/**
 * ElementTypeOf<TArray>
 */
export type ElementTypeOf<T extends any[]> = T extends (infer TElement)[]
  ? TElement
  : never;

export type ETO0 = ElementTypeOf<Function[]>;
export type ETO1 = ElementTypeOf<[string, (value: string) => void]>;
export type ETO2 = ElementTypeOf<{ a: number }>;

/**
 * ResolveType<T>
 */
export type ResolveType<T> = T extends Promise<infer TResolve>
  ? TResolve
  : never;

export type RT0 = ResolveType<Promise<Blob>>;
export type RT1 = ResolveType<string[]>;

/**
 * ResolveTypeOf<TPromise>
 */
export type ResolveTypeOf<T extends Promise<any>> = T extends Promise<
  infer TResolve
>
  ? TResolve
  : never;

export type RTO0 = ResolveTypeOf<Promise<Uint16Array>>;
export type RTO1 = ResolveTypeOf<string[]>;

/**
 * ComponentProps<T>
 */
export type ComponentProps<T> = T extends ComponentType<infer TProps>
  ? TProps
  : never;

type Comp0 = (props: { a: number; b: string }) => ReactElement<any> | null;
export type CProps0 = ComponentProps<Comp0>;

class Comp1 extends Component<{ c: boolean; d: Function }> {}
export type CProps1 = ComponentProps<typeof Comp1>;

type NotComp0 = (value: string) => void;
export type CProps2 = ComponentProps<NotComp0>;

/**
 * ComponentPropsOf<TComponentType>
 */
export type ComponentPropsOf<
  T extends ComponentType<any>
> = T extends ComponentType<infer TProps> ? TProps : never;

export type CPO0 = ComponentPropsOf<Comp0>;
export type CPO1 = ComponentPropsOf<typeof Comp1>;
export type CPO2 = ComponentPropsOf<NotComp0>;

/**
 * ValueType<T>
 */
export type ValueType<T> = T extends { [key in keyof T]: infer TValue }
  ? TValue
  : never;

export type V0 = ValueType<{ a: number; b: string; c: Function }>;
export type V1 = ValueType<string[]>;
export type V2 = ValueType<boolean>;

/**
 * ValueTypeOf<TRecord>
 */
export type ValueTypeOf<T extends Record<any, any>> = T extends {
  [key in keyof T]: infer TValue;
}
  ? TValue
  : never;

export type VO0 = ValueTypeOf<{ a: number; b: string; c: Function }>;
export type VO1 = ValueTypeOf<string[]>;
export type VO2 = ValueTypeOf<boolean>;

/**
 * Signature<T>
 */
export type Signature<T> = T extends (...args: infer TArgs) => infer TReturn
  ? [TArgs, TReturn]
  : never;

export type S0 = Signature<(a1: string, a2: number) => boolean>;
export type S1 = Signature<VoidFunction>;
export type S2 = Signature<Function>;
export type S3 = Signature<Promise<boolean>>;

/**
 * SignatureOf<TFunction>
 */
export type SignatureOf<T extends (...args: any[]) => any> = T extends (
  ...args: infer TArgs
) => infer TReturn
  ? [TArgs, TReturn]
  : never;

export type SO0 = SignatureOf<(a1: string, a2: number) => boolean>;
export type SO1 = SignatureOf<VoidFunction>;
export type SO2 = SignatureOf<Function>;
export type SO3 = SignatureOf<Promise<boolean>>;
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
export type First<T> = T extends [infer TFirst, ...any[]] ? TFirst : never;

export type F0 = First<[string, number, boolean]>;
export type F1 = First<string[]>;
export type F2 = First<number>;

/**
 * FirstOf<TArray>
 */
export type FirstOf<TArray extends any[]> = TArray extends [
  infer TFirst,
  ...any[]
]
  ? TFirst
  : never;

export type FO0 = FirstOf<[string, number, boolean]>;
export type FO1 = FirstOf<string[]>;
export type FO2 = FirstOf<number>;

/**
 * FirstParam<T>
 */
export type FirstParam<T> = T extends (...args: any[]) => any
  ? First<Parameters<T>>
  : never;

export type FP0 = FirstParam<(a: number, b: string) => boolean>;
export type FP1 = FirstParam<() => void>;
export type FP2 = FirstParam<(...args: any[]) => void>;
export type FP3 = FirstParam<Promise<string>>;

/**
 * FirstParamOf<TFunction>
 */
export type FirstParamOf<T extends (...args: any[]) => any> = First<
  Parameters<T>
>;

export type FPO0 = FirstParamOf<(a: number, b: string) => boolean>;
export type FPO1 = FirstParamOf<() => void>;
export type FPO2 = FirstParamOf<(...args: any[]) => void>;
export type FPO3 = FirstParamOf<Promise<string>>;

/**
 * Omit<T, K>: Exclude from T those properties that are assignable to K
 */
export type O0 = Omit<{ a: number; b: string }, "a">;
export type O1 = Omit<{ a: number; b: string }, "c">;

/**
 * OmitFrom<T, K>
 */
export type OmitFrom<T, TKey extends keyof T> = Omit<T, TKey>;
export type OF0 = OmitFrom<{ a: number; b: string }, "a">;
export type OF1 = OmitFrom<{ a: number; b: string }, "c">;

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
export type N2 = NonNullable<undefined>;
export type N3 = NonNullable<null>;
export type N4 = NonNullable<unknown>;
export type N5 = NonNullable<any>;

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
