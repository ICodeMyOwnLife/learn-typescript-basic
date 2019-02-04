"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function memoize(fn) {
    return function (arg) {
        var cache = new Map();
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        var result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map