/// <reference types="./Iterable.toEventSource.d.ts" />

import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const Iterable_toEventSource = () => (arr) => EventSource_create(listener => {
    for (const v of arr) {
        listener[SinkLike_notify](v);
    }
    listener[DisposableLike_dispose]();
});
export default Iterable_toEventSource;
