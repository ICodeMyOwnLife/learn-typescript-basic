// Turn this to be an ES Module
import "./augmentGlobal-1";

const NETWORK_FAILED = "networkFailed";
const NETWORK_SUCCESS = "networkSuccess";

declare global {
  interface Window {
    MyWidget: typeof MyWidget;
  }

  class MyWidget {
    constructor(selector: string);
    onComplete: VoidFunction;
    onError: (error: Error) => void;
  }

  interface WindowEventMap {
    [NETWORK_FAILED]: CustomEvent<NetworkResult>;
    [NETWORK_SUCCESS]: CustomEvent<NetworkResult>;
  }

  class CardElement extends HTMLElement {
    render: (title: string, content: string) => void;
    unmount: () => void;
  }

  interface HTMLElementTagNameMap {
    card: CardElement;
  }
}

interface NetworkResult {
  status: number;
  message: string;
}
