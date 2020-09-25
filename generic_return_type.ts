/**
 * Get return type of generic function
 * References:
 *  - https://stackoverflow.com/questions/52963637/typescript-is-it-possible-to-get-the-return-type-of-a-generic-function#answer-52964723
 */

import { FormikValues, useFormik } from "formik";

/*********************************************************/
interface TOptions {
  preventDefault: boolean;
}

const useEvent = <TEvent extends Event>({ preventDefault }: TOptions) => ({
  handleEvent: (e: TEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
  },
});

class EventHandlerHelper<TEvent extends Event> {
  ReturnType = useEvent<TEvent>({ preventDefault: true });
}

type UseEventReturnType<TEvent extends Event> = EventHandlerHelper<
  TEvent
>["ReturnType"];

declare const eventHandle: UseEventReturnType<StorageEvent>;

eventHandle.handleEvent(new StorageEvent("storage"));

/*********************************************************/

class UseFormikHelper<TValues extends FormikValues> {
  ReturnType = useFormik<TValues>({
    initialValues: {} as TValues,
    onSubmit: () => {},
  });
}

type UseFormikReturnType<TValues extends FormikValues> = UseFormikHelper<
  TValues
>["ReturnType"];

declare const formik: UseFormikReturnType<{ id: number; name: string }>;

formik.setValues({ id: 5, name: "a" });

/*********************************************************/

type ALL = string | number | object | boolean;

function MyFunc1<T extends ALL>() {
  return {
    foo: (os: T) => {
      console.log(os);
    },
  };
}

class MyFunc1Helper<T extends ALL> {
  ReturnType = MyFunc1<T>();
}

type MyFunc1ReturnType<T extends ALL> = MyFunc1Helper<T>["ReturnType"];

declare const r1: MyFunc1ReturnType<{ a: number }>;
r1.foo({ a: 4 });

function MyFunc2<T extends ALL>(r: 55, p: T, x: boolean): T {
  console.log(r, p, x);
  return p;
}

class MyFunc2Helper<T extends ALL> {
  ReturnType = MyFunc2<T>(55, 0 as T, true);
}

type MyFunc2ReturnType<T extends ALL> = MyFunc2Helper<T>["ReturnType"];

declare const r2: MyFunc2ReturnType<"d">;

console.log(r2);
