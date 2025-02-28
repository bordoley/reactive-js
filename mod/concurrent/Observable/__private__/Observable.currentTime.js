/// <reference types="./Observable.currentTime.d.ts" />

import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_now, SchedulerLike_schedule, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_isDisposed } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_currentTime = 
/*@__PURE__*/ Observable_createPureSynchronousObservable((observer) => {
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed]) {
            observer[ObserverLike_notify](observer[SchedulerLike_now]);
            ctx[ContinuationContextLike_yield]();
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
});
export default Observable_currentTime;
