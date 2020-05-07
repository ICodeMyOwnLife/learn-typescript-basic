# `declare` keyword

- The TypeScript `declare` keyword is used to declare variables that may not have originated from a TypeScript file.
- It tells TypeScript that a variable is defined somewhere else and has the specified type and is fine to use.

```ts
// This is a variable definition
const _RANDOM_VALUE_: number = Math.random();
console.log(_RANDOM_VALUE_.toFixed(2));

// This is a type declaration for _APP_NAME_ variable
declare const _APP_NAME_: string;
console.log(_APP_NAME_.toLowerCase());
```

## References

1. [Declaration Files - By Example](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)
1. [react-app.d.ts](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/lib/react-app.d.ts)
