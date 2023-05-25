/// <reference types="./Observable.delay.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, SchedulerLike_schedule, SchedulerLike_yield, SinkLike_notify, } from "../../types.js";
const Observable_delay = (delay, options) => (observable) => Runnable_create((observer) => {
    const { delayStart = false } = options ?? {};
    const enumerator = pipe(observable[EnumerableLike_enumerate](), Disposable_addTo(observer));
    const continuation = (scheduler) => {
        while (!observer[DisposableLike_isDisposed] &&
            enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            observer[SinkLike_notify](next);
            scheduler[SchedulerLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable_addTo(observer));
});
export default Observable_delay;
