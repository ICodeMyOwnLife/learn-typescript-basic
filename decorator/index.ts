import { Injectable } from "./Injectable";
import { Directive } from "./Directive";
import injector from "./injector";
import { Module } from "./Module";

class LogBase {
  private readonly id: number;

  constructor() {
    const ctor = this.constructor as any;
    this.id = ++ctor['count'];
    setTimeout(() => {
      console.log(`\nStart of ${this._name()} ctor`.padEnd(60, '-+'));
      console.log(`${this.name()} created`);
      this.log();
      console.log(`End of ${this._name()} ctor`.padEnd(60, '-+'));
      console.log();
    }, 0);
  }

  public name() { return `${this.constructor.name}#${this.id}`; }

  protected log() { }

  protected _name() {
    return this.constructor.name;
  }
}

@Injectable()
class ServiceA extends LogBase {
  protected static count = 0;
}

@Injectable()
class ServiceB extends LogBase {
  protected static count = 0;

  constructor(private serviceA: ServiceA) {
    super();
  }

  protected log() {
    console.log(`serviceA: ${this.serviceA.name()}`);
  }
}

@Directive()
class DirectiveA extends LogBase {
  protected static count = 0;

  constructor(private serviceA: ServiceA, private serviceB: ServiceB) {
    super();
  }

  protected log() {
    console.log(`serviceA: ${this.serviceA.name()}`);
    console.log(`serviceB: ${this.serviceB.name()}`);
  }
}

@Module({
  providers: [
    { provide: 'TestString', useValue: 'This is a test' }
  ]
})
class ModuleA {

}

const directiveA1 = injector.resolve(DirectiveA) as DirectiveA;
console.log(`directiveA1: ${directiveA1.name}`);

const directiveA2 = injector.resolve(DirectiveA) as DirectiveA;
console.log(`directiveA2: ${directiveA2.name}`);

console.log(ModuleA);
