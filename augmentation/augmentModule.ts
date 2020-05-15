// Must import the original module to augment
import "express-serve-static-core";

declare module "express-serve-static-core" {
  export interface Request {
    allParams: <TParams>() => TParams | undefined;
  }

  export interface Response {
    proxy: (url: string) => void;
    spa: (file: string) => void;
  }
}

