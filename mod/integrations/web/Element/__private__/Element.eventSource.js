/// <reference types="./Element.eventSource.d.ts" />

import { SinkLike_notify } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import { bindMethod, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
const Element_eventSource = (eventName, options) => (target) => EventSource.create(listener => {
    const eventHandler = bindMethod(listener, SinkLike_notify);
    const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.capture ?? true,
    };
    target.addEventListener(eventName, eventHandler, addEventListenerOptions);
    pipe(listener, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
    }));
});
export default Element_eventSource;
