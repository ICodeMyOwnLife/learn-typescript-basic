import { IResolve } from "./type";

export class Resolver implements IResolve {
  constructor(private resolveFn: () => any) { }

  public resolve() {
    return this.resolveFn();
  }
}
