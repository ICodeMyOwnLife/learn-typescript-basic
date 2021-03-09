/**
 * [JSDoc Property Modifiers](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#jsdoc-property-modifiers)
 */
// @ts-check
class BaseClass {
  /** @private */
  privateField = "private";
  /** @protected */
  protectedField = "protected";
}
class SubClass extends BaseClass {
  log() {
    console.log(this.privateField, this.protectedField);
  }
}
const a = new BaseClass();
console.log(a.privateField, a.protectedField);
