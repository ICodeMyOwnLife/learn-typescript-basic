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
      console.log(arg.name);
      break;

    default:
      console.log(arg);
      break;
  }
}
