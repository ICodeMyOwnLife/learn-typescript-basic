import { F } from "../src";

/**
 * Generic Function
 */
export type F1 = F.GenericFunction;
export type F2 = F.GenericFunction<[string]>;
export type F3 = F.GenericFunction<[number, number], Promise<string>>;
