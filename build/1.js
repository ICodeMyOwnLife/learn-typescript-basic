run('', function (log) {
    /**
     * Mapped types on tuples and arrays
     */
    var pc = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    log(pc);
    var pna = [Promise.resolve(1), Promise.resolve(2)];
    log(pna);
});
run('', function (log) {
    /**
     * Properties declarations on functions
     */
    function myFunction(s) { console.log(s); }
    myFunction.func = function (i) { console.log(i); };
    myFunction.prop = 3;
    log(myFunction);
});
run('', function (log) {
    /**
     * Rest parameters with tuple types
     */
    function f() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var n = args[0], s = args[1], b = args[2];
        log(n, s, b);
    }
    /**
     * Spread expressions with tuple types
     */
    var args = [1, 'a', true];
    f(1, 'a', true);
    f(args[0], args[1], args[2]);
    f.apply(void 0, args);
});
run('', function (log) {
    /**
     * Generic rest parameters
     */
    function bind(f, thisArg, first) {
        return f.bind(thisArg, first);
    }
    var obj = {
        a: 1,
        add: function (n1, n2, s) { return (this && this.a + n1 + n2) + s; }
    };
    var f = obj.add;
    var f1 = bind(f, obj, 5); // (n2: number, s: string) => string
    log(f1(6, 'apples'));
}, true);
run('', function (log) {
    /**
     * Optional elements in tuple types
     */
    var t;
    t = [1, 'a', true];
    t = [1, 'a'];
    t = [1];
    var n = t[0], s = t[1], b = t[2]; // n: number, s: string | undefined, b: boolean | undefined
    log(n, s, b);
});
run('', function (log) {
    /**
     * Rest elements in tuple types
     */
    function toTuple() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    }
    var nArr = [1, 2, 3];
    var t1 = toTuple(1, 'a', true); // [number, string, boolean]
    log(t1);
    var t2 = toTuple.apply(void 0, ['b'].concat(nArr)); // [string, ...number[]]
    log(t2);
});
run('', function (log) {
    /**
     * New unknown top type
     */
    var a;
    var b;
    var c;
    var d = 4;
    a = d;
    b = a;
    a = c;
    c = b;
    log(a == b);
});
var n = 5;
var s = Symbol();
function run(name, executeFn, isRun) {
    if (isRun === void 0) { isRun = false; }
    if (isRun)
        executeFn(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.log.apply(console, [name + ":"].concat(args));
        });
}
//# sourceMappingURL=1.js.map