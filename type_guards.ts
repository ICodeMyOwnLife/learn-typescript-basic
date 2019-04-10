/**
 * Type guards
 */
function test(arg: unknown) {
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
      console.log((<Function>arg).name);
      break;

    default:
      console.log(arg);
      break;
  }
}

/**
 * User-defined type guards
 */
interface Animal {
  kind: string;
  move: () => void;
}

interface Cat extends Animal {
  meow: () => void;
}

interface Dog extends Animal {
  bark: () => void;
}

function action(a: Animal) {
  if (isCat(a)) {
    return a.meow();
  }
  if (isDog(a)) {
    return a.bark();
  }
  a.move();
}

function isCat(a: Animal): a is Cat {
  return "meow" in a;
}

function isDog(a: Animal): a is Dog {
  return "bark" in a;
}
