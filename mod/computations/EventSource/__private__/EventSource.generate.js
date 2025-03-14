/// <reference types="./EventSource.generate.d.ts" />

import { none } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_generate = ((generator, initialValue, options) => EventSource_create(async (listener) => {
    const { count } = options ?? {};
    let acc = initialValue();
    let cnt = 0;
    await Promise.resolve();
    while (!listener[DisposableLike_isDisposed]) {
        acc = generator(acc);
        // Will never throw.
        listener[EventListenerLike_notify](acc);
        if (count !== none && (cnt++, cnt >= count)) {
            break;
        }
        if (!listener[DisposableLike_isDisposed]) {
            await Promise.resolve();
        }
        else {
            break;
        }
    }
    listener[DisposableLike_dispose]();
}));
export default EventSource_generate;
