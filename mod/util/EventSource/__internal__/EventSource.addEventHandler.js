/// <reference types="./EventSource.addEventHandler.d.ts" />

import { EventEmitterLike_addEventListener, } from "../../../util.js";
import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";
const EventSource_addEventHandler = (handler) => source => {
    const eventListener = EventListener_create(handler);
    source[EventEmitterLike_addEventListener](eventListener);
    return eventListener;
};
export default EventSource_addEventHandler;
