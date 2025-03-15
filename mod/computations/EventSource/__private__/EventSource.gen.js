/// <reference types="./EventSource.gen.d.ts" />

import { error } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_gen = ((factory) => EventSource_create(async (listener) => {
    await Promise.resolve();
    const iter = factory();
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
export default EventSource_gen;
