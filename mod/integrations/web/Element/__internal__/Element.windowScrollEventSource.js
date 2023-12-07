/// <reference types="./Element.windowScrollEventSource.d.ts" />

import { EventSourceLike_addEventListener, } from "../../../../events.js";
import * as Publisher from "../../../../events/Publisher.js";
import { invoke, none, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Element_eventSource from "./Element.eventSource.js";
const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
    let windowScrollEventSourceRef = none;
    return () => {
        const windowScrollEventSource = windowScrollEventSourceRef ??
            (() => {
                const windowScrollEventsPublisher = pipe(Publisher.createRefCounted(), Disposable.onDisposed(() => {
                    windowScrollEventSourceRef = none;
                }));
                windowScrollEventSourceRef = windowScrollEventsPublisher;
                pipe(window, Element_eventSource("scroll", { capture: true }), invoke(EventSourceLike_addEventListener, windowScrollEventsPublisher));
                return windowScrollEventsPublisher;
            })();
        return windowScrollEventSource;
    };
})();
export default Element_windowScrollEventSource;
