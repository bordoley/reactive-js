/// <reference types="./Element.windowResizeEventSource.d.ts" />

import { none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Element_eventSource from "./Element.eventSource.js";
const Element_windowResizeEventSource = /*@__PURE__*/ (() => {
    let windowResizeEventSourceRef = none;
    return () => windowResizeEventSourceRef ??
        (() => {
            windowResizeEventSourceRef = pipe(window, Element_eventSource("resize", { autoDispose: true }), DisposableContainer.onDisposed(_ => {
                windowResizeEventSourceRef = none;
            }));
            return windowResizeEventSourceRef;
        })();
})();
export default Element_windowResizeEventSource;
