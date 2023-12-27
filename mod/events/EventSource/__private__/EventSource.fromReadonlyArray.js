/// <reference types="./EventSource.fromReadonlyArray.d.ts" />

import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { SinkLike_notify } from "../../../events.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromReadonlyArray = (options) => (arr) => EventSource_create(listener => {
    let { start, count } = parseArrayBounds(arr, options);
    for (; count !== 0; count > 0 ? (start++, count--) : (start--, count++)) {
        listener[SinkLike_notify](arr[start]);
    }
    listener[DisposableLike_dispose]();
});
export default EventSource_fromReadonlyArray;
