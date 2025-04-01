/// <reference types="./SynchronousObservable.delay.d.ts" />

import { DisposableLike_dispose, SchedulerLike_schedule, } from "../../../utils.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const SynchronousObservable_delay = (delay) => DeferredReactiveSource.create((observer) => observer[SchedulerLike_schedule](() => observer[DisposableLike_dispose](), {
    delay,
}));
export default SynchronousObservable_delay;
