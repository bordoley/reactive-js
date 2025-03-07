import * as EventSource from "../../../computations/EventSource.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../computations.js";
import { Optional, invoke, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
  let windowScrollEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return () =>
    windowScrollEventSourceRef ??
    (() => {
      windowScrollEventSourceRef = EventSource.create(listener => {
        pipe(
          listener,
          DisposableContainer.onDisposed(() => {
            windowScrollEventSourceRef = none;
          }),
        );

        pipe(
          window,
          Element_eventSource<Window, "scroll">("scroll", { capture: true }),
          invoke(EventSourceLike_addEventListener, listener),
        );
      });
      return windowScrollEventSourceRef;
    })();
})();

export default Element_windowScrollEventSource;
