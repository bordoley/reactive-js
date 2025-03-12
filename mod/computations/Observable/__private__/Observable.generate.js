/// <reference types="./Observable.generate.d.ts" />

import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, SchedulerLike_schedule, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
const Observable_generate = (generator, initialValue, options) => Observable_createPureSynchronousObservable((observer) => {
    const { count, delay = 0, delayStart = false } = options ?? {};
    let acc = initialValue();
    let cnt = 0;
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed]) {
            acc = generator(acc);
            observer[QueueableLike_enqueue](acc);
            if (count !== none && (cnt++, cnt >= count)) {
                observer[DisposableLike_dispose]();
                break;
            }
            ctx[ContinuationContextLike_yield](delay);
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_generate;
