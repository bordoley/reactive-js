/// <reference types="./Element.eventSource.d.ts" />

import * as EventSource from "../../../computations/EventSource.js";
import { error, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
const Element_eventSource = (eventName, options) => (target) => EventSource.create((listener) => {
    const eventHandler = (ev) => {
        try {
            listener[EventListenerLike_notify](ev);
        }
        catch (e) {
            listener[DisposableLike_dispose](error(e));
        }
    };
    const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.passive ?? true,
    };
    target.addEventListener(eventName, eventHandler, addEventListenerOptions);
    pipe(listener, DisposableContainer.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
    }));
});
export default Element_eventSource;
