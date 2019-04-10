/**
 * Type guards
 */
function test(arg) {
    if (Array.isArray(arg)) {
        return console.log(arg.join(", "));
    }
    switch (typeof arg) {
        case "string":
            console.log(arg.toUpperCase());
            break;
        case "number":
            console.log(arg.toFixed(2));
            break;
        case "boolean":
            console.log(!arg);
            break;
        case "function":
            console.log(arg.name);
            break;
        default:
            console.log(arg);
            break;
    }
}
function action(a) {
    if (isCat(a)) {
        return a.meow();
    }
    if (isDog(a)) {
        return a.bark();
    }
    a.move();
}
function isCat(a) {
    return "meow" in a;
}
function isDog(a) {
    return "bark" in a;
}
//# sourceMappingURL=type_guards.js.map