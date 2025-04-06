/// <reference types="./Observable.delay.d.ts" />

import { SchedulerLike_schedule, SinkLike_complete, delayMs, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_delay = (delay) => DeferredEventSource.create((observer) => observer[SchedulerLike_schedule](function* () {
    yield delayMs(delay);
    observer[SinkLike_complete]();
}));
export default Observable_delay;
