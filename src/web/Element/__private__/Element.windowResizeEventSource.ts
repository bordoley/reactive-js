import { BroadcasterLike } from "../../../computations.js";
import { Optional, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
  let windowResizeEventSourceRef: Optional<BroadcasterLike<Event>> = none;

  return (): BroadcasterLike<Event> =>
    windowResizeEventSourceRef ??
    (() => {
      windowResizeEventSourceRef = pipe(
        window,
        Element_eventSource<Window, "resize">("resize", { autoDispose: true }),
        DisposableContainer.onDisposed(_ => {
          windowResizeEventSourceRef = none;
        }),
      );
      return windowResizeEventSourceRef;
    })();
})();

export default Element_windowResizeEventSource;
