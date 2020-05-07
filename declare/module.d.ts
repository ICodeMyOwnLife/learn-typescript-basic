export declare const __APP_VERSION__: string;
export declare function writeToFile(
  filename: string,
  data: any,
  options?: WriteFileOptions
): Promise<boolean>;

export declare enum Encoding {
  ASCII,
  UTF8,
  UTF16,
  UTF32,
}

export declare const enum FileType {
  PDF,
  TXT,
  CSV,
  XLSX,
}

export declare interface WriteFileOptions {
  encoding: Encoding;
  fileType: FileType;
}

export declare class ProductService {
  constructor(baseUrl: string);
  get(): Promise<ProductService.Product>;
}

export declare namespace ProductService {
  let timeout: number;

  interface Product {
    id: string;
    name: string;
    createdAt: Date;
  }
}
