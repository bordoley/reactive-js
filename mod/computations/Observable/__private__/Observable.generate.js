/// <reference types="./Observable.generate.d.ts" />

import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_generate = (generator, initialValue, options) => Observable_createPureSynchronousObservable((observer) => {
    const { count, delay = 0, delayStart = false } = options ?? {};
    let acc = initialValue();
    let cnt = 0;
    const continuation = (ctx) => {
        while (!observer[SinkLike_isCompleted]) {
            acc = generator(acc);
            observer[SinkLike_next](acc);
            if (count !== none && (cnt++, cnt >= count)) {
                observer[SinkLike_complete]();
                break;
            }
            ctx[ContinuationContextLike_yield](delay);
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_generate;
