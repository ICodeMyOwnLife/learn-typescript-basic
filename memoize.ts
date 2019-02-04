export function memoize<Arg, Result>(fn: (arg: Arg) => Result): (arg: Arg) => Result {
  return (arg: Arg) => {
    const cache = new Map<Arg, Result>();
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }
    const result = fn(arg);
    cache.set(arg, result)
    return result;
  }
}