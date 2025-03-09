/// <reference types="./EventSource.fromIterable.d.ts" />

import { error, returns } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromIterable = 
/*@__PURE__*/ returns((iter) => EventSource_create(async (listener) => {
    await Promise.resolve();
    try {
        for (const v of iter) {
            if (listener[DisposableLike_isDisposed]) {
                break;
            }
            listener[EventListenerLike_notify](v);
            if (!listener[DisposableLike_isDisposed]) {
                await Promise.resolve();
            }
            else {
                break;
            }
        }
        listener[DisposableLike_dispose]();
    }
    catch (e) {
        listener[DisposableLike_dispose](error(e));
    }
}));
export default EventSource_fromIterable;
