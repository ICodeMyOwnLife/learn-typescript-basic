import { Resolver } from "./Resolver";


export class ValueResolver extends Resolver {
  constructor(value: any) {
    super(() => value);
  }
}
