/// <reference types="./Runnable.fromEnumeratorFactory.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_fromEnumeratorFactory = ((factory, options) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        const enumerator = factory();
        const continuation = (ctx) => {
            while (!observer[DisposableLike_isDisposed]) {
                if (enumerator[EnumeratorLike_move]()) {
                    observer[ObserverLike_notify](enumerator[EnumeratorLike_current]);
                    ctx[ContinuationContextLike_yield](delay);
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
