/// <reference types="./Observable.fromAsyncIterable.d.ts" />

import { DispatcherLike_complete, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, } from "../../../concurrent.js";
import { error, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "./Observable.create.js";
const Observable_fromAsyncIterable = () => (iterable) => Observable_create((observer) => {
    const iterator = iterable[Symbol.asyncIterator]();
    const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
    const continuation = async () => {
        const startTime = observer[SchedulerLike_now];
        try {
            while (!observer[DisposableLike_isDisposed] &&
                observer[SchedulerLike_now] - startTime < maxYieldInterval) {
                const next = await iterator.next();
                if (next.done) {
                    observer[DispatcherLike_complete]();
                    break;
                }
                else if (!observer[QueueableLike_enqueue](next.value)) {
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
        pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
    };
    pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
});
export default Observable_fromAsyncIterable;
