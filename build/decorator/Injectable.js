"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var injector_1 = __importDefault(require("./injector"));
function Injectable() {
    return function (ctor) {
        injector_1.default.registerClass(ctor, ctor);
    };
}
exports.Injectable = Injectable;
//# sourceMappingURL=Injectable.js.map