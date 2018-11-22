"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var _TYPE_ = 'design:type';
var _PARAM_TYPES_ = 'design:paramtypes';
var _RETURN_TYPE_ = 'design:returntype';
var ReflectMetadata = /** @class */ (function () {
    function ReflectMetadata() {
    }
    ReflectMetadata.getType = function (target) {
        return Reflect.getMetadata(_TYPE_, target);
    };
    ReflectMetadata.getParamTypes = function (target) {
        return Reflect.getMetadata(_PARAM_TYPES_, target);
    };
    ReflectMetadata.getReturnType = function (target) {
        return Reflect.getMetadata(_RETURN_TYPE_, target);
    };
    return ReflectMetadata;
}());
exports.default = ReflectMetadata;
//# sourceMappingURL=reflect-metadata.js.map