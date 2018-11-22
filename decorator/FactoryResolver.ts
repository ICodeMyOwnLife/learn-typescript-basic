import { Resolver } from "./resolver";
import { FactoryFunction, Provide, IResolveProvide } from "./type";


export class FactoryResolver extends Resolver {
  constructor(factory: FactoryFunction, deps: Provide[], injector: IResolveProvide) {
    super(() => {
      const args = deps.map(provide => injector.resolve(provide));
      return factory(...args);
    });
  }
}
