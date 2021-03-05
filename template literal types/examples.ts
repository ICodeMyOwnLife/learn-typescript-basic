type Action = "focus" | "change" | "click";
type EventName1 = `on${Capitalize<Action>}`;
type EventName2 = `ON_${Uppercase<Action>}`;
type EventName3 = EventName2 extends `ON_${infer Name}`
  ? `handle_${Lowercase<Name>}`
  : never;
