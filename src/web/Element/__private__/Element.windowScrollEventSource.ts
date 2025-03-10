import { EventSourceLike } from "../../../computations.js";
import { Optional, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
  let windowScrollEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return () =>
    windowScrollEventSourceRef ??
    (() => {
      windowScrollEventSourceRef = pipe(
        window,
        Element_eventSource<Window, "scroll">("scroll", {
          capture: true,
          autoDispose: true,
        }),
        DisposableContainer.onDisposed(() => {
          windowScrollEventSourceRef = none;
        }),
      );

      return windowScrollEventSourceRef;
    })();
})();

export default Element_windowScrollEventSource;
