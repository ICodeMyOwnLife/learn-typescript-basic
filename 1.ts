run('', log => {
  /**
   * Mapped types on tuples and arrays
   */

  type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };

  type Coordinate = [number, number, number];
  type PromiseCoordinate = MapToPromise<Coordinate>; // [Promise<number>, Promise<number>, Promise<number>]
  const pc: PromiseCoordinate = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  log(pc);

  type NumberArray = number[];
  type PromiseNumberArray = MapToPromise<NumberArray>; // Promise<number>[]
  const pna: PromiseNumberArray = [Promise.resolve(1), Promise.resolve(2)];
  log(pna);
});


run('', log => {
  /**
   * Properties declarations on functions
   */

  function myFunction(s: string) { console.log(s); }
  myFunction.func = (i: number) => { console.log(i); }
  myFunction.prop = 3;
  log(myFunction);
});


run('', log => {
  /**
   * Rest parameters with tuple types
   */

  function f(...args: [number, string, boolean]) { // (args_0: number, args_1: string, args_2: boolean) => void
    const [n, s, b] = args;
    log(n, s, b);
  }

  /**
   * Spread expressions with tuple types
   */

  const args: [number, string, boolean] = [1, 'a', true];
  f(1, 'a', true);
  f(args[0], args[1], args[2]);
  f(...args);
});


run('', log => {
  /**
   * Generic rest parameters
   */

  function bind<TThis, TFirst, TArgs extends any[], TResult>(f: (first: TFirst, ...args: TArgs) => TResult, thisArg: TThis, first: TFirst): (...args: TArgs) => TResult {
    return f.bind(thisArg, first);
  }

  const obj = {
    a: 1,
    add(n1: number, n2: number, s: string) { return (this && this.a + n1 + n2) + s; }
  };

  const f = obj.add;
  const f1 = bind(f, obj, 5); // (n2: number, s: string) => string
  log(f1(6, 'apples'));
}, true);


run('', log => {
  /**
   * Optional elements in tuple types
   */

  let t: [number, string?, boolean?];
  t = [1, 'a', true];
  t = [1, 'a'];
  t = [1];
  const [n, s, b] = t; // n: number, s: string | undefined, b: boolean | undefined
  log(n, s, b);
});


run('', log => {
  /**
   * Rest elements in tuple types
   */

  function toTuple<Targs extends any[]>(...args: Targs): Targs {
    return args;
  }

  const nArr = [1, 2, 3];

  const t1 = toTuple(1, 'a', true); // [number, string, boolean]
  log(t1);

  const t2 = toTuple('b', ...nArr); // [string, ...number[]]
  log(t2);
});


run('', log => {
  /**
   * New unknown top type
   */

  let a: unknown;
  let b: unknown;
  let c: any;
  let d = 4;
  a = d;
  b = a;
  a = c;
  c = b;
  log(a == b);
});


const n = 5;
const s = Symbol();

type D = {
  [n]: any;
  [s]: any;
  [Symbol.iterator]: any;
}


function run(name: string, executeFn: (log: (...args: any[]) => void) => any, isRun: boolean = false) {
  if (isRun) executeFn((...args: any[]) => console.log(`${name}:`, ...args));
}
