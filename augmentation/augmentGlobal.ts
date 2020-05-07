import {} from "./augmentGlobal";

declare global {
  interface Window {
    MyWidget: typeof MyWidget;
  }

  class MyWidget {
    constructor(selector: string);
    onComplete: VoidFunction;
    onError: (error: Error) => void;
  }
}
