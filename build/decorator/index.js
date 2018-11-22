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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Injectable_1 = require("./Injectable");
var Directive_1 = require("./Directive");
var injector_1 = __importDefault(require("./injector"));
var Module_1 = require("./Module");
var LogBase = /** @class */ (function () {
    function LogBase() {
        var _this = this;
        var ctor = this.constructor;
        this.id = ++ctor['count'];
        setTimeout(function () {
            console.log(("\nStart of " + _this._name() + " ctor").padEnd(60, '-+'));
            console.log(_this.name() + " created");
            _this.log();
            console.log(("End of " + _this._name() + " ctor").padEnd(60, '-+'));
            console.log();
        }, 0);
    }
    LogBase.prototype.name = function () { return this.constructor.name + "#" + this.id; };
    LogBase.prototype.log = function () { };
    LogBase.prototype._name = function () {
        return this.constructor.name;
    };
    return LogBase;
}());
var ServiceA = /** @class */ (function (_super) {
    __extends(ServiceA, _super);
    function ServiceA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceA.count = 0;
    ServiceA = __decorate([
        Injectable_1.Injectable()
    ], ServiceA);
    return ServiceA;
}(LogBase));
var ServiceB = /** @class */ (function (_super) {
    __extends(ServiceB, _super);
    function ServiceB(serviceA) {
        var _this = _super.call(this) || this;
        _this.serviceA = serviceA;
        return _this;
    }
    ServiceB.prototype.log = function () {
        console.log("serviceA: " + this.serviceA.name());
    };
    ServiceB.count = 0;
    ServiceB = __decorate([
        Injectable_1.Injectable(),
        __metadata("design:paramtypes", [ServiceA])
    ], ServiceB);
    return ServiceB;
}(LogBase));
var DirectiveA = /** @class */ (function (_super) {
    __extends(DirectiveA, _super);
    function DirectiveA(serviceA, serviceB) {
        var _this = _super.call(this) || this;
        _this.serviceA = serviceA;
        _this.serviceB = serviceB;
        return _this;
    }
    DirectiveA.prototype.log = function () {
        console.log("serviceA: " + this.serviceA.name());
        console.log("serviceB: " + this.serviceB.name());
    };
    DirectiveA.count = 0;
    DirectiveA = __decorate([
        Directive_1.Directive(),
        __metadata("design:paramtypes", [ServiceA, ServiceB])
    ], DirectiveA);
    return DirectiveA;
}(LogBase));
var ModuleA = /** @class */ (function () {
    function ModuleA() {
    }
    ModuleA = __decorate([
        Module_1.Module({
            providers: [
                { provide: 'TestString', useValue: 'This is a test' }
            ]
        })
    ], ModuleA);
    return ModuleA;
}());
var directiveA1 = injector_1.default.resolve(DirectiveA);
console.log("directiveA1: " + directiveA1.name);
var directiveA2 = injector_1.default.resolve(DirectiveA);
console.log("directiveA2: " + directiveA2.name);
console.log(ModuleA);
//# sourceMappingURL=index.js.map