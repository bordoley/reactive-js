import * as EventSource from "../../../../events/EventSource.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../../events.js";
import { Optional, invoke, none, pipe } from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
  let windowResizeEventSourceRef: Optional<EventSourceLike<Event>> = none;

  return (): EventSourceLike<Event> =>
    windowResizeEventSourceRef ??
    (() => {
      windowResizeEventSourceRef = EventSource.create(listener => {
        pipe(
          listener,
          DisposableContainer.onDisposed(() => {
            windowResizeEventSourceRef = none;
          }),
        );

        pipe(
          window,
          Element_eventSource<Window, "resize">("resize"),
          invoke(EventSourceLike_addEventListener, listener),
        );
      });
      return windowResizeEventSourceRef;
    })();
})();

export default Element_windowResizeEventSource;
