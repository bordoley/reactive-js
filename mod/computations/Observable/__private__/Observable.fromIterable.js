/// <reference types="./Observable.fromIterable.d.ts" />

import { Iterator_done, Iterator_next, Iterator_value, Symbol, } from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import { error, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, SchedulerLike_schedule, } from "../../../utils.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_createSynchronousObservableWithSideEffects from "./Observable.createSynchronousObservableWithSideEffects.js";
const Observable_fromIterable = ((options) => (iterable) => {
    const create = Computation.isPure(iterable)
        ? Observable_createPureSynchronousObservable
        : Observable_createSynchronousObservableWithSideEffects;
    return create((observer) => {
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
});
export default Observable_fromIterable;
