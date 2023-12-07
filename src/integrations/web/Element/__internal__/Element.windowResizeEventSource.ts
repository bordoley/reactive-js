import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../../events.js";
import * as Publisher from "../../../../events/Publisher.js";
import { Optional, invoke, none, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
  let windowResizeEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return (): EventSourceLike<Event> => {
    const windowResizeEventSource =
      windowResizeEventSourceRef ??
      (() => {
        const windowResizeEventPublisher = pipe(
          Publisher.createRefCounted(),
          Disposable.onDisposed(() => {
            windowResizeEventSourceRef = none;
          }),
        );
        windowResizeEventSourceRef = windowResizeEventPublisher;
        pipe(
          window,
          Element_eventSource("resize"),
          invoke(EventSourceLike_addEventListener, windowResizeEventPublisher),
        );
        return windowResizeEventPublisher;
      })();

    return windowResizeEventSource;
  };
})();

export default Element_windowResizeEventSource;
