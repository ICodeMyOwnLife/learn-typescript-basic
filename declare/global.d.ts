declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
  ...args: ((arg: unknown) => void)[]
) => (arg: unknown) => void;
declare let __WEBPACK_PUBLIC_PATH__: string;
declare var _zid: number;
declare function request(o: RequestObject): Promise<Response>;

declare enum RequestMethod {
  GET,
  HEAD,
  POST,
  PUT,
  PATCH,
  DELETE,
  OPTION,
}

declare const enum RequestDataType {
  JSON,
  TEXT,
  STREAM,
  BLOB,
}

declare interface RequestObject {
  url: string;
  method?: RequestMethod;
  dataType?: RequestDataType;
}

declare class AwesomeWidget {
  get name(): string;
  constructor(selector: string, template: string);
  classes: AwesomeWidget.Classes;
  mount(): void;
  unmount(): void;
}

declare namespace AwesomeWidget {
  function getAllWidgets(): AwesomeWidget[];
  type Classes = Record<"root" | "heading" | "content", string>;
}

declare module "*.html" {
  const template: string;
  export default template;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
