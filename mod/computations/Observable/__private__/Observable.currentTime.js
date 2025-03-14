/// <reference types="./Observable.currentTime.d.ts" />

import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, EventListenerLike_notify, SchedulerLike_now, SchedulerLike_schedule, SinkLike_isCompleted, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_currentTime = 
/*@__PURE__*/ Observable_createPureSynchronousObservable((observer) => {
    const continuation = (ctx) => {
        while (!observer[SinkLike_isCompleted]) {
            observer[EventListenerLike_notify](observer[SchedulerLike_now]);
            ctx[ContinuationContextLike_yield]();
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
});
export default Observable_currentTime;
