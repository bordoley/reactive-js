/// <reference types="./Sequence.toObservable.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
const Sequence_toObservable = ((options) => (seq) => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSubscribe = (observer) => {
        let next = seq();
        const continuation = () => {
            while (!observer[DisposableLike_isDisposed] && isSome(next)) {
                observer[ObserverLike_notify](next[SequenceLike_data]);
                next = next[SequenceLike_next]();
                Continuation__yield(delay);
            }
            observer[DisposableLike_dispose]();
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    const retval = hasDelay(options)
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
    return retval;
});
export default Sequence_toObservable;
