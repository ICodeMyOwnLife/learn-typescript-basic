import { Type } from "./type";
import ReflectMetadata from "./ReflectMetadata";
import injector from "./injector";

export function Directive(): ClassDecorator {
  return (ctor) => {
    const Ctor = <unknown>ctor as Type<any>;
    const paramTypes = ReflectMetadata.getParamTypes(ctor);
    injector.registerFactory(Ctor, (...args: any[]) => new Ctor(...args), paramTypes);
  }
}