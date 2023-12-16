/// <reference types="./Observable.fromIterable.d.ts" />

import { SchedulerLike_schedule, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { error, isSome, none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";
const Observable_fromIterable = (options) => (iterable) => Observable_createRunnableWithSideEffects((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const iterator = iterable[Symbol.iterator]();
    const continuation = (__yield) => {
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
                __yield(delay);
            }
            else {
                observer[DisposableLike_dispose]();
            }
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable.addTo(observer));
});
export default Observable_fromIterable;
