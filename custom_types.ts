import {
  Requireable,
  ReactElementLike,
  ReactNodeLike,
  Validator
} from "prop-types";

export type IsOptional<T> = undefined | null extends T
  ? true
  : undefined extends T
  ? true
  : null extends T
  ? true
  : false;

export type RequiredPropNames<T> = NonNullable<
  { [K in keyof T]: IsOptional<T[K]> extends true ? never : K }[keyof T]
>;

export type OptionalPropNames<T> = Exclude<keyof T, RequiredPropNames<T>>;

export type MapToPropType<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends Function
  ? Function
  : T extends Symbol
  ? Symbol
  : T extends ReactElementLike
  ? ReactElementLike
  : T extends ArrayLike<infer TElement>
  ? TElement[]
  : T extends object
  ? object
  : ReactNodeLike;

export type PropTypeOf<T> = Requireable<MapToPropType<T>>;

export type RequiredPropTypeOf<T> = Validator<MapToPropType<T>>;

export type PropTypesOf<T> = {
  readonly [K in keyof T]?: IsOptional<T[K]> extends true
    ? Requireable<T[K]>
    : Validator<T[K]>
};

export type DefaultPropsOf<T, TKey extends keyof T> = Readonly<Pick<T, TKey>>;
