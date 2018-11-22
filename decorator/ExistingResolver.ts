import { Resolver } from "./resolver";
import { IResolveProvide, Provide } from "./type";


export class ExistingResolver extends Resolver {
  constructor(provideExisting: Provide, injector: IResolveProvide) {
    super(() => injector.resolve(provideExisting));
  }
}
