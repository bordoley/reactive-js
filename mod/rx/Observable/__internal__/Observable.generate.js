/// <reference types="./Observable.generate.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import { DisposableLike_isDisposed, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
const Observable_generate = ((generator, initialValue, options) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        let acc = initialValue();
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed]) {
                acc = generator(acc);
                observer[ObserverLike_notify](acc);
                scheduler[SchedulerLike_yield](delay);
            }
        };
        pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
});
export default Observable_generate;
