/// <reference types="./Observable.delay.d.ts" />

import { SchedulerLike_schedule, SinkLike_complete, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_delay = (delay) => DeferredEventSource.create((observer) => observer[SchedulerLike_schedule](function* () {
    observer[SinkLike_complete]();
}, { delay }));
export default Observable_delay;
