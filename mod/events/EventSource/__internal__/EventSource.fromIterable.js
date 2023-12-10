/// <reference types="./EventSource.fromIterable.d.ts" />

import { SinkLike_notify } from "../../../events.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromIterable = () => (arr) => EventSource_create(listener => {
    for (const v of arr) {
        listener[SinkLike_notify](v);
    }
    listener[DisposableLike_dispose]();
});
export default EventSource_fromIterable;
