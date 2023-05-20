/// <reference types="./ReadonlyArray.toEventSource.d.ts" />

import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const ReadonlyArray_toEventSource = () => (arr) => EventSource_create(listener => {
    for (let i = 0; i < arr.length; i++) {
        listener[SinkLike_notify](arr[i]);
    }
    listener[DisposableLike_dispose]();
});
export default ReadonlyArray_toEventSource;
