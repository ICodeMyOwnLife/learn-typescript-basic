"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var injector_1 = __importDefault(require("./injector"));
function Module(config) {
    return function (_) {
        for (var _i = 0, _a = config.providers; _i < _a.length; _i++) {
            var provider = _a[_i];
            var provide = provider.provide;
            if (provider.useClass) {
                injector_1.default.registerClass(provide, provider.useClass);
            }
            else if (provider.useExisting) {
                injector_1.default.registerExisting(provide, provider.useExisting);
            }
            else if (provider.useFactory) {
                injector_1.default.registerFactory(provide, provider.useFactory, provider.deps || []);
            }
            else if (provider.useValue) {
                injector_1.default.registerValue(provide, provider.useValue);
            }
        }
    };
}
exports.Module = Module;
//# sourceMappingURL=Module.js.map