/// <reference types="./EventSource.empty.d.ts" />

import { DisposableLike_dispose, EventEmitterLike_addEventListener, } from "../../../util.js";
const _empty = {
    [EventEmitterLike_addEventListener]: function (listener) {
        listener[DisposableLike_dispose]();
    },
};
const EventSource_empty = () => _empty;
export default EventSource_empty;
