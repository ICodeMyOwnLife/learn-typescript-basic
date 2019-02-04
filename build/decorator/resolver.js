"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resolver = /** @class */ (function () {
    function Resolver(resolveFn) {
        this.resolveFn = resolveFn;
    }
    Resolver.prototype.resolve = function () {
        return this.resolveFn();
    };
    return Resolver;
}());
exports.Resolver = Resolver;
//# sourceMappingURL=Resolver.js.map