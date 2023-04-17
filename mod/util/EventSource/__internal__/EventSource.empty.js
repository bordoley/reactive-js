/// <reference types="./EventSource.empty.d.ts" />

import { DisposableLike_dispose, EventSourceLike_addListener, ReplayableLike_buffer, } from "../../../util.js";
import IndexedBufferCollection_empty from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.empty.js";
const _empty = {
    [EventSourceLike_addListener]: function (listener) {
        listener[DisposableLike_dispose]();
    },
    [ReplayableLike_buffer]: /*@__PURE__*/ IndexedBufferCollection_empty(),
};
const EventSource_empty = () => _empty;
export default EventSource_empty;
