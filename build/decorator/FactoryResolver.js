"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_1 = require("./resolver");
var FactoryResolver = /** @class */ (function (_super) {
    __extends(FactoryResolver, _super);
    function FactoryResolver(factory, deps, injector) {
        return _super.call(this, function () {
            var args = deps.map(function (provide) { return injector.resolve(provide); });
            return factory.apply(void 0, args);
        }) || this;
    }
    return FactoryResolver;
}(resolver_1.Resolver));
exports.FactoryResolver = FactoryResolver;
//# sourceMappingURL=FactoryResolver.js.map