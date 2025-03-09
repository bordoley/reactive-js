/// <reference types="./EventSource.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { error } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromReadonlyArray = (options) => (arr) => {
    let [start, count] = parseArrayBounds(arr, options);
    return EventSource_create(async (listener) => {
        await Promise.resolve();
        while (count !== 0 && !listener[DisposableLike_isDisposed]) {
            try {
                listener[EventListenerLike_notify](arr[start]);
            }
            catch (e) {
                listener[DisposableLike_dispose](error(e));
                break;
            }
            count > 0 ? (start++, count--) : (start--, count++);
            if (!listener[DisposableLike_isDisposed] && count !== 0) {
                await Promise.resolve();
            }
        }
        listener[DisposableLike_dispose]();
    });
};
export default EventSource_fromReadonlyArray;
