/// <reference types="./Observable.currentTime.d.ts" />

import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_now, SchedulerLike_schedule, } from "../../../concurrent.js";
import { DisposableLike_isDisposed } from "../../../utils.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";
const Observable_currentTime = 
/*@__PURE__*/ Observable_createPureRunnable((observer) => {
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed]) {
            observer[ObserverLike_notify](observer[SchedulerLike_now]);
            ctx[ContinuationContextLike_yield]();
        }
    };
    observer[SchedulerLike_schedule](continuation);
});
export default Observable_currentTime;
