import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import { Optional, invoke, none, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
  let windowResizeEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return (): EventSourceLike<Event> =>
    windowResizeEventSourceRef ??
    (() => {
      windowResizeEventSourceRef = EventSource.create(listener => {
        pipe(
          listener,
          Disposable.onDisposed(() => {
            windowResizeEventSourceRef = none;
          }),
        );

        pipe(
          window,
          Element_eventSource("resize"),
          invoke(EventSourceLike_addEventListener, listener),
        );
      });
      return windowResizeEventSourceRef;
    })();
})();

export default Element_windowResizeEventSource;
