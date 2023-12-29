import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../../events.js";
import * as Publisher from "../../../../events/Publisher.js";
import { Optional, invoke, none, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
  let windowScrollEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return () => {
    const windowScrollEventSource =
      windowScrollEventSourceRef ??
      (() => {
        const windowScrollEventsPublisher = pipe(
          Publisher.create({
            autoDispose: true,
          }),
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
