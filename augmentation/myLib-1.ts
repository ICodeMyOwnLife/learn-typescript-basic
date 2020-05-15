declare global {
  namespace MyLib {
    // These open interfaces may be extended in an application-specific manner via declaration merging.
    interface ProcessConfig {}
    interface ProcessConfigOptions {}
  }
}

import { ChildProcess } from "child_process";

export interface ProcessConfig extends MyLib.ProcessConfig {
  command: string;
}

export interface ProcessConfigOptions extends MyLib.ProcessConfigOptions {
  debug: boolean;
}

export declare const spawn: (config: ProcessConfig) => ChildProcess;
