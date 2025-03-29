/// <reference types="./Element.eventSource.d.ts" />

import * as Broadcaster from "../../../computations/Broadcaster.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { EventListenerLike_notify } from "../../../utils.js";
const Element_eventSource = (eventName, options) => (target) => Broadcaster.create((listener) => {
    const eventHandler = bindMethod(listener, EventListenerLike_notify);
    const addEventSinkOptions = {
        capture: options?.capture ?? false,
        passive: options?.passive ?? true,
    };
    target.addEventListener(eventName, eventHandler, addEventSinkOptions);
    pipe(listener, DisposableContainer.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
    }));
}, options);
export default Element_eventSource;
