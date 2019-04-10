"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * `this` parameter
 */
function print(prefix) {
    var _a = this, id = _a.id, name = _a.name, yob = _a.yob;
    console.log(prefix + " #" + id + ": " + name + " - " + yob);
}
exports.print = print;
var user = {
    id: 1,
    name: "User 1",
    yob: 2000,
    active: true
};
print.call(user, "User");
var user2 = __assign({}, user, { print: print });
user2.print("User");
var userMethods = {
    activate: function () {
        this.active = true;
    },
    deactivate: function () {
        this.active = false;
    }
};
function makeCustomModel(model, methods) {
    return Object.assign({}, model, methods);
}
var customUser = makeCustomModel(user, userMethods);
customUser.activate();
console.log(customUser.active);
customUser.deactivate();
console.log(customUser.active);
//# sourceMappingURL=this.js.map