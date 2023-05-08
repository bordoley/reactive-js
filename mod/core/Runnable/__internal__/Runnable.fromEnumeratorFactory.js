/// <reference types="./Runnable.fromEnumeratorFactory.d.ts" />

import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_move, ObserverLike_notify, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import { none, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_fromEnumeratorFactory = ((factory, options) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        const enumerator = factory();
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed]) {
                if (enumerator[EnumeratorLike_move]()) {
                    observer[ObserverLike_notify](enumerator[EnumeratorLike_current]);
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
export default Runnable_fromEnumeratorFactory;
