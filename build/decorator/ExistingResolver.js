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
var ExistingResolver = /** @class */ (function (_super) {
    __extends(ExistingResolver, _super);
    function ExistingResolver(provideExisting, injector) {
        return _super.call(this, function () { return injector.resolve(provideExisting); }) || this;
    }
    return ExistingResolver;
}(resolver_1.Resolver));
exports.ExistingResolver = ExistingResolver;
//# sourceMappingURL=ExistingResolver.js.map