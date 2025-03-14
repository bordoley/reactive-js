/// <reference types="./Observable.fromAsyncIterable.d.ts" />

import { Iterator_done, Iterator_next, Iterator_value, } from "../../../__internal__/constants.js";
import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, QueueableLike_isReady, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../../utils.js";
import Observable_create from "./Observable.create.js";
const Observable_fromAsyncIterable = () => (iterable) => Observable_create((observer) => {
    const iterator = iterable[Symbol.asyncIterator]();
    const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
    const continuation = async () => {
        const startTime = observer[SchedulerLike_now];
        // Initialized to true so that we don't reschedule
        // unless we enter the loop.
        let done = true;
        try {
            while (!observer[SinkLike_isCompleted] &&
                observer[SchedulerLike_now] - startTime < maxYieldInterval) {
                done = false;
                const next = await iterator[Iterator_next]();
                if (next[Iterator_done]) {
                    observer[SinkLike_complete]();
                    done = true;
                    break;
                }
                else if ((observer[SinkLike_next](next[Iterator_value]),
                    !observer[QueueableLike_isReady])) {
                    // An async iterable can produce resolved promises which are immediately
                    // scheduled on the microtask queue. This prevents the observer's scheduler
                    // from running and draining queued events.
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
        if (!done) {
            pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
        }
    };
    pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
});
export default Observable_fromAsyncIterable;
