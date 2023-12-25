/// <reference types="./EventSource.fromReadonlyArray.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import Indexed_toCollection from "../../../collections/Indexed/__private__/Indexed.toCollection.js";
import { SinkLike_notify } from "../../../events.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromReadonlyArray = 
/*@__PURE__*/ Indexed_toCollection((arr, startIndex, count) => EventSource_create(listener => {
    let iterCount = count;
    let iterStartIndex = startIndex;
    for (; iterCount !== 0; iterCount > 0
        ? (iterStartIndex++, iterCount--)
        : (iterStartIndex--, iterCount++)) {
        listener[SinkLike_notify](arr[iterStartIndex]);
    }
    listener[DisposableLike_dispose]();
}), v => v.length);
export default EventSource_fromReadonlyArray;
