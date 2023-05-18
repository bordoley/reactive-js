import * as Disposable from "../../../../Disposable.js";
import * as EventSource from "../../../../EventSource.js";
import { Optional, invoke, none, pipe } from "../../../../functions.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../../types.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
  let windowResizeEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return (): EventSourceLike<Event> => {
    const windowResizeEventSource =
      windowResizeEventSourceRef ??
      (() => {
        const windowResizeEventPublisher = pipe(
          EventSource.createRefCountedPublisher(),
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
