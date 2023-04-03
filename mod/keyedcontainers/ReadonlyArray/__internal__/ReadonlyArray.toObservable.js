/// <reference types="./ReadonlyArray.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_toObservable = 
/*@__PURE__*/
ReadonlyArray_toContainer((values, startIndex, count, options) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const onSubscribe = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = (ctx) => {
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
                ctx[ContinuationContextLike_yield](delay);
            }
            observer[DisposableLike_dispose]();
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
});
export default ReadonlyArray_toObservable;
