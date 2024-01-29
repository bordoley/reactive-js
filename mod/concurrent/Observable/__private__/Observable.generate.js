/// <reference types="./Observable.generate.d.ts" />

import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_schedule, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";
const Observable_generate = (generator, initialValue, options) => Observable_createPureRunnable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    let acc = initialValue();
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed]) {
            acc = generator(acc);
            observer[ObserverLike_notify](acc);
            ctx[ContinuationContextLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
});
export default Observable_generate;
