/// <reference types="./AsyncIterable.toObservable.d.ts" />

import { error, pipe } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { SchedulerLike_now, SchedulerLike_schedule, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const AsyncIterable_toObservable = (o) => (iterable) => Observable_create((observer) => {
    const { maxYieldInterval = 300 } = o !== null && o !== void 0 ? o : {};
    const iterator = iterable[Symbol.asyncIterator]();
    const scheduler = observer[DispatcherLike_scheduler];
    const continuation = async () => {
        const startTime = scheduler[SchedulerLike_now];
        try {
            while (!observer[DisposableLike_isDisposed] &&
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining dispatched events.
                //
                // Check the observer's buffer size so we can avoid queueing forever
                // in this situation.
                scheduler[SchedulerLike_now] - startTime < maxYieldInterval) {
                const next = await iterator.next();
                if (next.done) {
                    observer[DispatcherLike_complete]();
                    break;
                }
                else if (!observer[QueueableLike_push](next.value)) {
                    // An async iterable can produce resolved promises which are immediately
                    // scheduled on the microtask queue. This prevents the observer's scheduler
                    // from running and draining dispatched events.
                    //
                    // Check the observer's buffer size so we can avoid queueing forever
                    // in this situation.
                    break;
                }
            }
        }
        catch (e) {
            observer[DisposableLike_dispose](error(e));
        }
        if (!observer[DisposableLike_isDisposed]) {
            pipe(scheduler[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
        }
    };
    pipe(scheduler[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
});
export default AsyncIterable_toObservable;
