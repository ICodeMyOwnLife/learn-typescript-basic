/**
 * Reference: https://fettblog.eu/typescript-hasownproperty/
 */
export const hasOwnProperty = <
  TObject extends object,
  TProp extends PropertyKey
>(
  o: TObject,
  prop: TProp
): o is TObject & Record<TProp, unknown> => !!o?.hasOwnProperty(prop);
