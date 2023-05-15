/// <reference types="./Enumerator.toRunnable.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_move, ObserverLike_notify, SchedulerLike_schedule, SchedulerLike_yield, } from "../../types.js";
const Enumerator_toRunnable = ((options) => (enumerator) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed] &&
                enumerator[EnumeratorLike_move]()) {
                const next = enumerator[EnumeratorLike_current];
                observer[ObserverLike_notify](next);
                scheduler[SchedulerLike_yield](delay);
            }
        };
        pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
});
export default Enumerator_toRunnable;
