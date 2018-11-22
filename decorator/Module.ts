import { Provider } from "./type";
import injector from "./injector";

export function Module(config: ModuleConfig): ClassDecorator {
  return _ => {
    for (const provider of config.providers) {
      const provide = provider.provide;

      if (provider.useClass) {
        injector.registerClass(provide, provider.useClass);
      } else if (provider.useExisting) {
        injector.registerExisting(provide, provider.useExisting);
      } else if (provider.useFactory) {
        injector.registerFactory(provide, provider.useFactory, provider.deps || []);
      } else if (provider.useValue) {
        injector.registerValue(provide, provider.useValue);
      }
    }
  }
}

export interface ModuleConfig {
  providers: Provider[]
}
