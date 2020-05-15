/// <reference types="node" />

// Turn this to be an ES Module
import "./augmentGlobal-2";

declare global {
  namespace Express {
    interface Session {
      info?: RefreshTokenItem;
    }

    interface RefreshTokenItem {
      expires: Date;
      origin: string;
      userId: number;
    }
  }

  namespace MyLib {
    interface ProcessConfig {
      argv: string[];
    }

    interface ProcessConfigOptions {
      verbose: boolean;
    }
  }
}
