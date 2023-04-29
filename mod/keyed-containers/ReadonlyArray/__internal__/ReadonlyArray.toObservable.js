/// <reference types="./ReadonlyArray.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_toObservable = 
/*@__PURE__*/
ReadonlyArray_toContainer((values, startIndex, count, options) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = (scheduler) => {
            while (!observer[DisposableLike_isDisposed] && cnt !== 0) {
                const value = values[index];
                if (cnt > 0) {
                    index++;
                    cnt--;
                }
                else {
                    index--;
                    cnt++;
                }
                observer[ObserverLike_notify](value);
                scheduler[SchedulerLike_yield](delay);
            }
            observer[DisposableLike_dispose]();
        };
        pipe(observer[SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
});
export default ReadonlyArray_toObservable;
