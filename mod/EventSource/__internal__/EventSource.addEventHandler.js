/// <reference types="./EventSource.addEventHandler.d.ts" />

import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";
import { EventSourceLike_addEventListener, } from "../../types.js";
const EventSource_addEventHandler = (handler) => (source) => {
    const eventListener = EventListener_create(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
};
export default EventSource_addEventHandler;
