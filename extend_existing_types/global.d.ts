import { ResizeObserverConstructor } from "../types/ResizeObserver";

declare global {
  interface Window {
    ResizeObserver: ResizeObserverConstructor;
  }

  var ResizeObserver: ResizeObserverConstructor;
}
