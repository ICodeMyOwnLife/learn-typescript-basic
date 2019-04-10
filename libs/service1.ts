export class Service1<T> {
  constructor(private _value: T) {}

  public get value() {
    return this._value;
  }

  public set value(value: T) {
    this._value = value;
  }
}
