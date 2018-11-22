"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValueResolver_1 = require("./ValueResolver");
var ClassResolver_1 = require("./ClassResolver");
var ExistingResolver_1 = require("./ExistingResolver");
var FactoryResolver_1 = require("./FactoryResolver");
var Injector = /** @class */ (function () {
    function Injector() {
        this.map = new Map();
    }
    Injector.prototype.registerValue = function (provide, value) {
        this.setValue(provide, new ValueResolver_1.ValueResolver(value));
    };
    Injector.prototype.registerClass = function (provide, ctor) {
        this.setValue(provide, new ClassResolver_1.ClassResolver(ctor, this));
    };
    Injector.prototype.registerExisting = function (provide, provideExisting) {
        this.setValue(provide, new ExistingResolver_1.ExistingResolver(provideExisting, this));
    };
    Injector.prototype.registerFactory = function (provide, factory, deps) {
        this.setValue(provide, new FactoryResolver_1.FactoryResolver(factory, deps, this));
    };
    Injector.prototype.resolve = function (provide, optional) {
        if (optional === void 0) { optional = false; }
        var resolver = this.getValue(provide);
        if (resolver) {
            return resolver.resolve();
        }
        if (optional) {
            return null;
        }
        throw Error('Cannot resolve');
    };
    Injector.prototype.setValue = function (key, value) {
        this.map.set(key, value);
    };
    Injector.prototype.getValue = function (key) {
        return this.map.get(key);
    };
    return Injector;
}());
exports.Injector = Injector;
var injector = new Injector();
exports.default = injector;
;
//# sourceMappingURL=injector.js.map