/// <reference types="./Observable.fromIterable.d.ts" />

import { ContinuationContextLike_yield, SchedulerLike_schedule, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { error, isSome, none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createPureRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";
const Observable_fromIterable = (options) => (iterable) => Observable_createPureRunnableWithSideEffects((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const iterator = iterable[Symbol.iterator]();
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed]) {
            let next = none;
            try {
                next = iterator.next();
            }
            catch (e) {
                // Catch any errors thrown by the iterator
                observer[DisposableLike_dispose](error(e));
            }
            if (isSome(next) && !next.done) {
                observer[SinkLike_notify](next.value);
                ctx[ContinuationContextLike_yield](delay);
            }
            else {
                observer[DisposableLike_dispose]();
            }
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable.addTo(observer));
});
export default Observable_fromIterable;
