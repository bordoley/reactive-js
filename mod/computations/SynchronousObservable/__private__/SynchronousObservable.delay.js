/// <reference types="./SynchronousObservable.delay.d.ts" />

import { SchedulerLike_schedule, SinkLike_complete, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const SynchronousObservable_delay = (delay) => DeferredEventSource.create((observer) => observer[SchedulerLike_schedule](function* () {
    observer[SinkLike_complete]();
}, { delay }));
export default SynchronousObservable_delay;
