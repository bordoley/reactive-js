/// <reference types="./Observable.currentTime.d.ts" />

import { SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../concurrent.js";
import { DisposableLike_isDisposed, SinkLike_notify } from "../../../utils.js";
import Observable_createRunnable from "./Observable.createRunnable.js";
const Observable_currentTime = 
/*@__PURE__*/ Observable_createRunnable((observer) => {
    const continuation = (scheduler) => {
        while (!observer[DisposableLike_isDisposed]) {
            observer[SinkLike_notify](scheduler[SchedulerLike_now]);
            scheduler[SchedulerLike_yield]();
        }
    };
    observer[SchedulerLike_schedule](continuation);
});
export default Observable_currentTime;
