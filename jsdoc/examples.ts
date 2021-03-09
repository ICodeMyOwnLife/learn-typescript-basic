/**
 * [@ts-expect-error Comments](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)
 */
const concatString = (a: string, b: string) => a + b;
// @ts-expect-error
concatString(4, 5);
// @ts-expect-error
concatString("a", "b");

/**
 * [@deprecated Support](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#-deprecated--support)
 */
/** @deprecated */
const deprecatedFunction = () => {
  console.log("OK");
};
deprecatedFunction();

class MyClass1 {
  /** @deprecated */
  deprecatedMethod() {
    console.log("OK");
  }
}
const myObj1 = new MyClass1();
myObj1.deprecatedMethod();

/** @deprecated */
class DeprecatedClass {}
new DeprecatedClass();
