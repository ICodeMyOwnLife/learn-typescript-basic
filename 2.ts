class FormControl<T> {
  public value?: T;
}

interface Item {
  id: string;
  value: number;
  data?: any;
}

type MapToForm<T> = { +readonly [P in keyof T]-?: FormControl<T[P]> };

type ItemForm = MapToForm<Item>;

class FormGroup<T> {
  constructor(public form: MapToForm<T>) {}

  // public getValue(): ReadonlyPartial<T> {
  //   const value: ReadonlyPartial<T> = {};
  //   for (const key of Object.keys(this.form)) {
  //     value[key] = (this.form[key] as FormControl<any>).value;
  //   }
  //   return value;
  // }
}
