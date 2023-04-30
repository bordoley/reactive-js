/// <reference types="./EventSource.empty.d.ts" />

import { DisposableLike_dispose, EventSourceLike_addEventListener, } from "../../../util.js";
const _empty = {
    [EventSourceLike_addEventListener]: function (listener) {
        listener[DisposableLike_dispose]();
    },
};
const EventSource_empty = () => _empty;
export default EventSource_empty;
