/// <reference types="./Element.windowScrollEventSource.d.ts" />

import { none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";
const Element_windowScrollEventSource = /*@__PURE__*/ (() => {
    let windowScrollEventSourceRef = none;
    return () => windowScrollEventSourceRef ??
        (() => {
            windowScrollEventSourceRef = pipe(window, Element_eventSource("scroll", {
                capture: true,
                autoDispose: true,
            }), DisposableContainer.onDisposed(() => {
                windowScrollEventSourceRef = none;
            }));
            return windowScrollEventSourceRef;
        })();
})();
export default Element_windowScrollEventSource;
