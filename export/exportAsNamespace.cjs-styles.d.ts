// Enable MyLib to be used as module or global script (UMD module)
export = MyLib1;
export as namespace MyLib1;

declare namespace MyLib1 {
  interface MyLib1Config {
    var1: number;
    var2: string;
  }

  export const run1: (config: MyLib1Config) => void;
}
