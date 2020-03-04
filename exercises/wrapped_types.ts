/**
 * Question: If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?
 * References:
 * https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4
 * https://dev.to/macsikora/advanced-typescript-exercises-answer-1-59ge
 */

export type ResolveTypeOf<T extends Promise<any>> = T extends Promise<
  infer TResolve
>
  ? TResolve
  : never;

export type RT0 = ResolveTypeOf<Promise<string>>;

export type RT1 = ResolveTypeOf<any>;
