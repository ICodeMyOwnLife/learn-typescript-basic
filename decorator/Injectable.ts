import injector from "./injector";
import { Type } from "./type";


export function Injectable(): ClassDecorator {
  return ctor => {
    injector.registerClass(ctor, <unknown>ctor as Type<any>);
  }
}
