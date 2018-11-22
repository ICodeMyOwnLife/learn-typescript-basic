"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReflectMetadata_1 = __importDefault(require("./ReflectMetadata"));
// import ts from 'typescript';
var ts_nameof_1 = __importDefault(require("ts-nameof"));
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    return TestClass;
}());
function TestFunction(_p1, _p2) {
    return 5;
}
var t = ReflectMetadata_1.default.getType(TestFunction);
var pt = ReflectMetadata_1.default.getParamTypes(TestFunction);
var rt = ReflectMetadata_1.default.getReturnType(TestFunction);
console.log(t, pt, rt);
var a = ts_nameof_1.default()(TestClass);
console.log(a);
//# sourceMappingURL=test.js.map