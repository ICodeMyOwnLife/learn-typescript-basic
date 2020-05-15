// Enable MyLib to be used as module or global script (UMD module)
export as namespace MyLib2;

export interface MyLib2Config {
  var1: number;
  var2: string;
}

export const run2: (config: MyLib2Config) => void;
