"use strict";
/**
 * References:
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rest parameters with tuple types
 */
function ft0() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
exports.ft0 = ft0;
// Equivalent to
function f0(args_0, args_1, args_2) {
    console.log(args_0, args_1, args_2);
}
exports.f0 = f0;
/**
 * Spread expressions with tuple types
 */
var ft0Args = tuple(1, "a", false);
ft0.apply(void 0, ft0Args);
// Equivalent to
ft0(0, "a", false);
ft0(ft0Args[0], ft0Args[1], ft0Args[2]);
/**
 * Generic rest parameters
 */
function curry(fn, x) {
    return fn.bind(null, x);
}
exports.curry = curry;
function fCurry0(a, b, c) {
    console.log(a, b, c);
}
var fCurry1 = curry(fCurry0, 5);
var fCurry2 = curry(fCurry1, "a");
var fCurry3 = curry(fCurry2, false);
fCurry0(5, "a", false);
fCurry1("a", false);
fCurry2(false);
fCurry3();
/**
 * Optional elements in tuple types
 */
var t0;
t0 = [5, "a", false];
t0 = [5, "a"];
t0 = [5];
console.log(t0);
/**
 * Rest elements in tuple types
 */
function tuple() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
tuple(5, "a", false);
var a0 = [1, 2, 3];
var tr0 = tuple.apply(void 0, ["b"].concat(a0));
tr0 = ["b"];
tr0 = ["b", 1];
tr0 = ["b"].concat(a0);
console.log(tr0);
//# sourceMappingURL=tuples.js.map