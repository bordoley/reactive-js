/// <reference types="./SynchronousObservable.delay.d.ts" />

import { DisposableLike_dispose, SchedulerLike_schedule, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const SynchronousObservable_delay = (delay) => DeferredEventSource.create((observer) => observer[SchedulerLike_schedule](() => observer[DisposableLike_dispose](), {
    delay,
}));
export default SynchronousObservable_delay;
