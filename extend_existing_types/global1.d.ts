import { ResizeObserverConstructor } from "../types/ResizeObserver";

declare global {
  interface Window {
    readonly ResizeObserver: ResizeObserverConstructor;
  }

  const ResizeObserver: ResizeObserverConstructor;
}
