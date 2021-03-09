export interface Options {
  autoRun?: boolean;
  debug?: boolean;
}

export interface Config {
  onInitialize: VoidFunction;
  onSave: VoidFunction;
}

export class Player {
  constructor(options: Options) {
    console.log(options);
  }
  static create(config: Config) {
    console.log(config);
  }
}
