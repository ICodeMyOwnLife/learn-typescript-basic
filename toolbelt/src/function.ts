export type GenericFunction<TArgs extends any[] = [], TReturn = void> = (
  ...args: TArgs
) => TReturn;
