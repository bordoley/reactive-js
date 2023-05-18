import * as Disposable from "../../../../Disposable.js";
import * as EventSource from "../../../../EventSource.js";
import { Optional, invoke, none, pipe } from "../../../../functions.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../../types.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
  let windowScrollEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return () => {
    const windowScrollEventSource =
      windowScrollEventSourceRef ??
      (() => {
        const windowScrollEventsPublisher = pipe(
          EventSource.createRefCountedPublisher(),
          Disposable.onDisposed(() => {
            windowScrollEventSourceRef = none;
          }),
        );
        windowScrollEventSourceRef = windowScrollEventsPublisher;
        pipe(
          window,
          Element_eventSource("scroll", { capture: true }),
          invoke(EventSourceLike_addEventListener, windowScrollEventsPublisher),
        );
        return windowScrollEventsPublisher;
      })();

    return windowScrollEventSource;
  };
})();

export default Element_windowScrollEventSource;
