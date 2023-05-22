/// <reference types="./Enumerable.observeWith.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, SchedulerLike_schedule, SchedulerLike_yield, SinkLike_notify, } from "../../types.js";
const Enumerable_observeWith = (observer, options) => (enumerable) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const enumerator = pipe(enumerable[EnumerableLike_enumerate](), Disposable_addTo(observer));
    const continuation = (scheduler) => {
        while (!observer[DisposableLike_isDisposed] &&
            enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            observer[SinkLike_notify](next);
            scheduler[SchedulerLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
};
export default Enumerable_observeWith;
