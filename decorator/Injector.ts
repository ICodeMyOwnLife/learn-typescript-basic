import { IResolveProvide, Provide, FactoryFunction, Type } from "./type";
import { ValueResolver } from "./ValueResolver";
import { ClassResolver } from "./ClassResolver";
import { ExistingResolver } from "./ExistingResolver";
import { FactoryResolver } from "./FactoryResolver";
import { Resolver } from "./resolver";


export class Injector implements IResolveProvide {
  private readonly map: Map<any, Resolver> = new Map();

  public registerValue(provide: Provide, value: any) {
    this.setValue(provide, new ValueResolver(value));
  }

  public registerClass(provide: Provide, ctor: Type<any>) {
    this.setValue(provide, new ClassResolver(ctor, this));
  }

  public registerExisting(provide: Provide, provideExisting: Provide) {
    this.setValue(provide, new ExistingResolver(provideExisting, this));
  }

  public registerFactory(provide: Provide, factory: FactoryFunction, deps: Provide[]) {
    this.setValue(provide, new FactoryResolver(factory, deps, this));
  }

  public resolve(provide: Provide, optional = false) {
    const resolver = this.getValue(provide);

    if (resolver) {
      return resolver.resolve();
    }

    if (optional) {
      return null;
    }

    throw Error('Cannot resolve');
  }

  private setValue(key: any, value: any) {
    this.map.set(key, value);
  }

  private getValue(key: any) {
    return this.map.get(key);
  }
}

const injector = new Injector();
export default injector;;
