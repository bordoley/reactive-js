/// <reference types="./EventSource.fromAsyncIterable.d.ts" />

import { error, returns } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromAsyncIterable = 
/*@__PURE__*/ returns((iter) => EventSource_create(async (listener) => {
    try {
        for await (const v of iter) {
            if (listener[DisposableLike_isDisposed]) {
                break;
            }
            listener[EventListenerLike_notify](v);
            if (listener[DisposableLike_isDisposed]) {
                break;
            }
        }
        listener[DisposableLike_dispose]();
    }
    catch (e) {
        listener[DisposableLike_dispose](error(e));
    }
}));
export default EventSource_fromAsyncIterable;
