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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Resolver_1 = require("./Resolver");
var ReflectMetadata_1 = __importDefault(require("./ReflectMetadata"));
var ClassResolver = /** @class */ (function (_super) {
    __extends(ClassResolver, _super);
    function ClassResolver(ctor, injector) {
        var _this = _super.call(this, function () {
            if (_this.value) {
                return _this.value;
            }
            var paramTypes = ReflectMetadata_1.default.getParamTypes(ctor) || [];
            var args = paramTypes.map(function (provide) { return injector.resolve(provide); });
            return _this.value = new (ctor.bind.apply(ctor, [void 0].concat(args)))();
        }) || this;
        _this.value = null;
        return _this;
    }
    return ClassResolver;
}(Resolver_1.Resolver));
exports.ClassResolver = ClassResolver;
//# sourceMappingURL=ClassResolver.js.map