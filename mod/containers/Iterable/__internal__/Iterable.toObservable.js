/// <reference types="./Iterable.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
const Iterable_toObservable = ((options) => (iterable) => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSubscribe = (observer) => {
        const iterator = iterable[Symbol.iterator]();
        const continuation = (ctx) => {
            while (!observer[DisposableLike_isDisposed]) {
                const next = iterator.next();
                if (!next.done) {
                    observer[ObserverLike_notify](next.value);
                    ctx[ContinuationContextLike_yield](delay);
                }
                else {
                    observer[DisposableLike_dispose]();
                }
            }
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    const retval = delay > 0 ? Runnable_create(onSubscribe) : Enumerable_create(onSubscribe);
    return retval;
});
export default Iterable_toObservable;
