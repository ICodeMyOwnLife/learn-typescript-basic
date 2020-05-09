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
 * Type guard using instanceof
 *************************************/
export const logValue = async (
  valueFactory: number | (() => number) | Promise<number>
) => {
  let value: number;
  if (valueFactory instanceof Promise) {
    value = await valueFactory;
  } else if (valueFactory instanceof Function) {
    value = valueFactory();
  } else {
    value = valueFactory;
  }
  console.log(value);
};

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

/**************************************
 * Type guard using discriminated union
 *************************************/
interface SuccessResponse<TData> {
  status: "success";
  statusCode: number;
  data: TData;
}

interface FailedResponse {
  status: "failed";
  statusCode: number;
  error: string;
}

type ServerResponse<TData> = SuccessResponse<TData> | FailedResponse;

export const request = async (promise: Promise<ServerResponse<string>>) => {
  const response = await promise;
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.error(response.error);
  }
};
