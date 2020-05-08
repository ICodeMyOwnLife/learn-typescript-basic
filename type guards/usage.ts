/**************************************
 * Type guard using `in`
 *************************************/
export const logPerson = (p: Person) => {
  // Type guard using `in`
  if ("occupation" in p) {
    console.log(p.occupation);
  } else {
    console.log(p.role);
  }
};

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

/**************************************
 * Type guard using `typeof`
 *************************************/
export function logInfo(arg: unknown) {
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
      console.log(arg.valueOf());
      break;

    case "function":
      console.log(arg.name, arg.arguments, arg.length);
      break;

    default:
      console.log(arg);
      break;
  }
}

/**************************************
 * Type guard using type predicates
 *************************************/
export const isPromiseLike = (o: any): o is PromiseLike<unknown> =>
  (typeof o === "object" || typeof o === "function") &&
  typeof o?.then === "function";

export const logAsync = async (o: Promise<number> | (() => number)) => {
  let value: number;
  if (isPromiseLike(o)) {
    value = await o;
  } else {
    value = o();
  }
  console.log(value);
};
