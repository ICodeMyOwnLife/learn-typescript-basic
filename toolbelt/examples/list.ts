import type { L } from "../src";
import type { List } from "ts-toolbelt";

/**
 * First
 */
export type F0 = L.First<[string, number, boolean]>;
export type F1 = List.Head<[string, number, boolean]>;
export type F2 = L.First<number[]>;
export type F3 = List.Head<number[]>;
export type F4 = L.First<[]>;
export type F5 = List.Head<[]>;
export type F6 = L.First<{ length: number; [k: number]: Function }>;
export type F7 = List.Head<{ length: number; [k: number]: Function }>;
export type F8 = L.First<Iterable<boolean>>;
export type F9 = List.Head<Iterable<boolean>>;

/**
 * Remaining
 */
export type R0 = L.Remaining<[string, number, boolean]>;
export type R1 = List.Tail<[string, number, boolean]>;
export type R2 = L.Remaining<number[]>;
export type R3 = List.Tail<number[]>;
export type R4 = L.Remaining<[Function]>;
export type R5 = List.Tail<[Function]>;
export type R6 = L.Remaining<[]>;
export type R7 = List.Tail<[]>;
export type R8 = L.Remaining<{ length: number; [k: number]: Function }>;
export type R9 = List.Tail<{ length: number; [k: number]: Function }>;
export type R10 = L.Remaining<Iterable<boolean>>;
export type R11 = List.Tail<Iterable<boolean>>;