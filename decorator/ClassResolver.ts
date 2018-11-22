import { Resolver } from "./Resolver";
import { Type, IResolveProvide } from "./type";
import ReflectMetadata from "./ReflectMetadata";


export class ClassResolver extends Resolver {
  private value: any = null;

  constructor(ctor: Type<any>, injector: IResolveProvide) {
    super(() => {
      if (this.value) { return this.value; }

      const paramTypes = ReflectMetadata.getParamTypes(ctor) || [];
      const args = paramTypes.map(provide => injector.resolve(provide));
      return this.value = new ctor(...args);
    });
  }
}
