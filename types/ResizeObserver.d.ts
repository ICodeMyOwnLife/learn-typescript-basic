export interface ResizeObserver {
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
  disconnect: VoidFunction;
}

export interface ResizeObserverEntry {
  contentRect: DOMRectReadOnly;
  target: Element;
}

export type ResizeObserverCallback = (
  entries: readonly ResizeObserverEntry[]
) => void;

export interface ResizeObserverConstructor {
  new (callback: ResizeObserverCallback): ResizeObserver;
}
