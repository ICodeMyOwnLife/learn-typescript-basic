export type First<TList extends List> = TList["length"] extends 0
  ? never
  : TList[0];

export type Last<TList extends List> = TList[LastIndex<TList>];

export type LastIndex<TList extends List> = Remaining<TList>["length"];

export type List<T = any> = readonly T[];

export type Remaining<TList extends List> = ((...args: TList) => any) extends (
  first: any,
  ...remaining: infer TRemaining
) => any
  ? TRemaining
  : never;
