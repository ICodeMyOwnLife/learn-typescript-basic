/**
 * [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
 */
type Action = "focus" | "change" | "click";
type EventName1 = `on${Capitalize<Action>}`;
type EventName2 = `ON_${Uppercase<Action>}`;
type EventName3 = EventName2 extends `ON_${infer Name}`
  ? `handle_${Lowercase<Name>}`
  : never;

type Method = "Get" | "Post" | "Put";
type App = {
  [k in Uncapitalize<Method>]: (path: string, handler: VoidFunction) => void;
};
declare const app: App;
app.get("/", () => console.log("GET called"));
app.post("/", () => console.log("POST called"));
app.put("/", () => console.log("PUT called"));

type PropEventSource1<T> = {
  on(eventName: `${string & keyof T}Changed`, callback: VoidFunction): void;
};

declare function makeWatchedObject1<T>(o: T): T & PropEventSource1<T>;
const obj1 = makeWatchedObject1({ name: "Peter", yob: 2003 });
obj1.on("nameChanged", () => console.log(obj1.name));
obj1.on("yobChanged", () => console.log(obj1.yob));

type PropEventSource2<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (newValue: T[K]) => void
  ): void;
};

declare function makeWatchedObject2<T>(o: T): T & PropEventSource2<T>;
const obj2 = makeWatchedObject2({ name: "Peter", yob: 2003 });
obj2.on("nameChanged", newName => console.log(newName));
obj2.on("yobChanged", newYob => console.log(newYob));
