/// <reference types="./Enumerable.toRunnable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, } from "../../../ix.js";
import { ObserverLike_notify, } from "../../../rx.js";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import enumerate from "./Enumerable.enumerate.js";
const Enumerable_toRunnable = (options) => enumerable => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, enumerate(), Disposable_bindTo(observer));
        pipe(observer, Observer_schedule(() => {
            while (!observer[DisposableLike_isDisposed] &&
                (enumerator[SourceLike_move](),
                    enumerator[EnumeratorLike_hasCurrent])) {
                observer[ObserverLike_notify](enumerator[EnumeratorLike_current]);
                Continuation__yield(delay);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? Runnable_create(onSink)
        : EnumerableObservable_create(onSink);
};
export default Enumerable_toRunnable;
