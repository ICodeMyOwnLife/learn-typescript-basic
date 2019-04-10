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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var GenericComponent = /** @class */ (function (_super) {
    __extends(GenericComponent, _super);
    function GenericComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    GenericComponent.prototype.render = function () {
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, value = _a.value;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, title),
            react_1.default.createElement("h2", null, subtitle),
            react_1.default.createElement("p", null, value)));
    };
    GenericComponent.propTypes = {
        title: prop_types_1.default.string.isRequired,
        subtitle: prop_types_1.default.string.isRequired,
        info: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
        value: prop_types_1.default.any,
        data: prop_types_1.default.shape({
            id: prop_types_1.default.number.isRequired,
            name: prop_types_1.default.string.isRequired
        }).isRequired,
        list: prop_types_1.default.arrayOf(prop_types_1.default.string.isRequired).isRequired,
        children: prop_types_1.default.node
    };
    GenericComponent.defaultProps = {
        title: "Generic Component",
        subtitle: ""
    };
    return GenericComponent;
}(react_1.Component));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var user = { id: 1, name: "User 1" };
        return (react_1.default.createElement(GenericComponent, { subtitle: "Sub", value: 5, info: "", list: [], data: user }));
    };
    return App;
}(react_1.Component));
exports.default = App;
//# sourceMappingURL=generic_components.js.map