/// <reference types="./Element.windowScrollEventSource.d.ts" />

import { EventSourceLike_addEventListener, } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import { invoke, none, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Element_eventSource from "./Element.eventSource.js";
const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
    let windowScrollEventSourceRef = none;
    return () => windowScrollEventSourceRef ??
        (() => {
            windowScrollEventSourceRef = EventSource.create(listener => {
                pipe(listener, Disposable.onDisposed(() => {
                    windowScrollEventSourceRef = none;
                }));
                pipe(window, Element_eventSource("scroll", { capture: true }), invoke(EventSourceLike_addEventListener, listener));
            });
            return windowScrollEventSourceRef;
        })();
})();
export default Element_windowScrollEventSource;
