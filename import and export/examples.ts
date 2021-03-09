/**
 * [Type-Only Imports and Export](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)
 */
import type { Component } from "react";
import type { Options, Player } from "./lib";
export const options: Options = { autoRun: false, debug: true };
console.log(new Player(options));
interface Props {
  title: string;
}
export declare const MyComponent: Component<Props>;
export type { Props };
export type { Config } from "./lib";

/**
 * [export * as ns Syntax](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#export--as-ns-syntax)
 */
export * as player from "./lib";
