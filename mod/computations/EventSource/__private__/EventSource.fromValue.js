/// <reference types="./EventSource.fromValue.d.ts" />

import { error, returns } from "../../../functions.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromValue = 
/*@__PURE__*/ returns((v) => EventSource_create(async (listener) => {
    await Promise.resolve();
    try {
        listener[EventListenerLike_notify](v);
    }
    catch (e) {
        listener[DisposableLike_dispose](error(e));
    }
    listener[DisposableLike_dispose]();
}));
export default EventSource_fromValue;
