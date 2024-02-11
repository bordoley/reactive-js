/// <reference types="./Element.eventSource.d.ts" />

import * as EventSource from "../../../../events/EventSource.js";
import { EventListenerLike_notify, } from "../../../../events.js";
import { bindMethod, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
const Element_eventSource = (eventName, options) => (target) => EventSource.create(listener => {
    const eventHandler = bindMethod(listener, EventListenerLike_notify);
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
