/// <reference types="./Iterable.toObservable.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe, pipeLazy } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SchedulerLike_schedule, SchedulerLike_yield, SinkLike_notify, } from "../../types.js";
import Iterable_enumerate from "./Iterable.enumerate.js";
const Iterable_toObservable = ((options) => (iterable) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        const iterator = iterable[Symbol.iterator]();
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed]) {
                const next = iterator.next();
                if (!next.done) {
                    observer[SinkLike_notify](next.value);
                    scheduler[SchedulerLike_yield](delay);
                }
                else {
                    observer[DisposableLike_dispose]();
                }
            }
        };
        pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(pipeLazy(iterable, Iterable_enumerate()), false);
});
export default Iterable_toObservable;
