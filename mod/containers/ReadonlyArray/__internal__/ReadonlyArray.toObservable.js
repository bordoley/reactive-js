/// <reference types="./ReadonlyArray.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_toObservable = 
/*@__PURE__*/
ReadonlyArray_toContainer((values, startIndex, count, options) => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSubscribe = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = () => {
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
                if (cnt !== 0) {
                    Continuation__yield(delay);
                }
            }
            pipe(observer, Disposable_dispose());
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
});
export default ReadonlyArray_toObservable;
