/// <reference types="./Iterable.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const Iterable_toObservable = ((options) => (iterable) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        const iterator = iterable[Symbol.iterator]();
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed]) {
                const next = iterator.next();
                if (!next.done) {
                    observer[ObserverLike_notify](next.value);
                    scheduler[SchedulerLike_yield](delay);
                }
                else {
                    observer[DisposableLike_dispose]();
                }
            }
        };
        pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
    };
    const retval = delay > 0 ? Runnable_create(onSubscribe) : Enumerable_create(onSubscribe);
    return retval;
});
export default Iterable_toObservable;
