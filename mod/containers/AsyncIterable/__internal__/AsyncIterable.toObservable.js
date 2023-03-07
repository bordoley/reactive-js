/// <reference types="./AsyncIterable.toObservable.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { error, pipe } from "../../../functions.js";
import { ObserverLike_dispatcher, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DispatcherLike_scheduler, SchedulerLike_now, } from "../../../scheduling.js";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const AsyncIterable_toObservable = (o) => (iterable) => Observable_create((observer) => {
    const { maxBuffer = MAX_SAFE_INTEGER, maxYieldInterval = 300 } = o !== null && o !== void 0 ? o : {};
    const dispatcher = observer[ObserverLike_dispatcher];
    const iterator = iterable[Symbol.asyncIterator]();
    const scheduler = dispatcher[DispatcherLike_scheduler];
    const continuation = async () => {
        const startTime = scheduler[SchedulerLike_now];
        try {
            while (!dispatcher[DisposableLike_isDisposed] &&
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining dispatched events.
                //
                // Check the dispatcher's buffer size so we can avoid queueing forever
                // in this situation.
                dispatcher[QueueLike_count] < maxBuffer &&
                scheduler[SchedulerLike_now] - startTime < maxYieldInterval) {
                const next = await iterator.next();
                if (!next.done && !dispatcher[DisposableLike_isDisposed]) {
                    dispatcher[QueueLike_push](next.value);
                }
                else {
                    dispatcher[DisposableLike_dispose]();
                }
            }
        }
        catch (e) {
            dispatcher[DisposableLike_dispose](error(e));
        }
        if (!dispatcher[DisposableLike_isDisposed]) {
            pipe(scheduler, Scheduler_schedule(continuation), Disposable_addTo(observer));
        }
    };
    pipe(scheduler, Scheduler_schedule(continuation), Disposable_addTo(observer));
});
export default AsyncIterable_toObservable;
