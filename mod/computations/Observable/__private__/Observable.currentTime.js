/// <reference types="./Observable.currentTime.d.ts" />

import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, QueueableLike_enqueue, QueueableLike_isCompleted, SchedulerLike_now, SchedulerLike_schedule, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_currentTime = 
/*@__PURE__*/ Observable_createPureSynchronousObservable((observer) => {
    const continuation = (ctx) => {
        while (!observer[QueueableLike_isCompleted]) {
            observer[QueueableLike_enqueue](observer[SchedulerLike_now]);
            ctx[ContinuationContextLike_yield]();
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
});
export default Observable_currentTime;
