/// <reference types="./Observable.generate.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_isDisposed, SchedulerLike_schedule, SchedulerLike_yield, SinkLike_notify, } from "../../types.js";
const Observable_generate = ((generator, initialValue, options) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        let acc = initialValue();
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed]) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                scheduler[SchedulerLike_yield](delay);
            }
        };
        pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
    };
    const generateEnumerator = (generator, initialValue) => () => {
        const iter = function* () {
            let acc = initialValue();
            while (true) {
                acc = generator(acc);
                yield acc;
            }
        };
        return pipe(iter(), Iterable_enumerate());
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(generateEnumerator(generator, initialValue), true);
});
export default Observable_generate;
