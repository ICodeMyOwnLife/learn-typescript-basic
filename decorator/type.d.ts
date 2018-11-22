export interface IResolve {
  resolve(): any;
}

export interface IResolveProvide {
  resolve(provide: Provide): any;
}

export type FactoryFunction = Function;

export type Provide = any;

export type Provider = {
  provide: any;
  useClass?: Type<any>;
  useExisting?: any;
  useFactory?: FactoryFunction;
  useValue?: any;
  deps?: any[]
};

export interface TypeProvider extends Type<any> { }

export type ClassProvider = ClassSansProvider & WithProvider;

export interface ClassSansProvider {
  useClass: Type<any>;
}

export type FactoryProvider = FactorySansProvider & WithProvider;

export interface FactorySansProvider {
  useFactory: FactoryFunction;
  deps?: any[]
}

export type ValueProvider = ValueSansProvider & WithProvider;

export interface ValueSansProvider {
  useValue: any;
}

export interface Type<T> extends Function {
  new(...args: any[]): T;
}

interface WithProvider {
  provide: any;
  multi?: boolean;
}