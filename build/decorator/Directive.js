"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReflectMetadata_1 = __importDefault(require("./ReflectMetadata"));
var injector_1 = __importDefault(require("./injector"));
function Directive() {
    return function (ctor) {
        var Ctor = ctor;
        var paramTypes = ReflectMetadata_1.default.getParamTypes(ctor);
        injector_1.default.registerFactory(Ctor, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (Ctor.bind.apply(Ctor, [void 0].concat(args)))();
        }, paramTypes);
    };
}
exports.Directive = Directive;
//# sourceMappingURL=Directive.js.map