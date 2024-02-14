/// <reference types="./Element.windowResizeEventSource.d.ts" />

import * as EventSource from "../../../../events/EventSource.js";
import { EventSourceLike_addEventListener, } from "../../../../events.js";
import { invoke, none, pipe } from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";
const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
    let windowResizeEventSourceRef = none;
    return () => windowResizeEventSourceRef ??
        (() => {
            windowResizeEventSourceRef = EventSource.create(listener => {
                pipe(listener, DisposableContainer.onDisposed(() => {
                    windowResizeEventSourceRef = none;
                }));
                pipe(window, Element_eventSource("resize"), invoke(EventSourceLike_addEventListener, listener));
            });
            return windowResizeEventSourceRef;
        })();
})();
export default Element_windowResizeEventSource;
