/// <reference types="./EventSource.fromValue.d.ts" />

import { returns } from "../../../functions.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromValue = 
/*@__PURE__*/ returns((v) => EventSource_create(async (listener) => {
    await Promise.resolve();
    // Will never throw.
    listener[EventListenerLike_notify](v);
    listener[DisposableLike_dispose]();
}));
export default EventSource_fromValue;
