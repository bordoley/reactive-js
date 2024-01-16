/// <reference types="./Observable.fromIterable.d.ts" />

import { Iterator_done, Iterator_next, Iterator_value, } from "../../../__internal__/constants.js";
import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_schedule, } from "../../../concurrent.js";
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
                next = iterator[Iterator_next]();
            }
            catch (e) {
                // Catch any errors thrown by the iterator
                observer[DisposableLike_dispose](error(e));
            }
            if (isSome(next) && !next[Iterator_done]) {
                observer[ObserverLike_notify](next[Iterator_value]);
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
