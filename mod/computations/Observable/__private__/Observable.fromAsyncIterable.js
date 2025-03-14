/// <reference types="./Observable.fromAsyncIterable.d.ts" />

import { Iterator_done, Iterator_next, Iterator_value, } from "../../../__internal__/constants.js";
import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, EventListenerLike_notify, QueueableLike_addOnReadyListener, QueueableLike_isReady, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import Observable_create from "./Observable.create.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";
const Observable_fromAsyncIterable = (() => (iterable) => {
    const create = Computation.isPure(iterable)
        ? Observable_createPureDeferredObservable
        : Observable_create;
    return create((observer) => {
        const iterator = iterable[Symbol.asyncIterator]();
        const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
        let continuationIsActive = false;
        const continuation = async () => {
            try {
                const startTime = observer[SchedulerLike_now];
                // Initialized to true so that we don't reschedule
                // unless we enter the loop.
                let done = true;
                while (!observer[SinkLike_isCompleted] &&
                    observer[QueueableLike_isReady] &&
                    observer[SchedulerLike_now] - startTime < maxYieldInterval) {
                    done = false;
                    const next = await iterator[Iterator_next]();
                    if (next[Iterator_done]) {
                        observer[SinkLike_complete]();
                        done = true;
                        break;
                    }
                    else if ((observer[EventListenerLike_notify](next[Iterator_value]),
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
                continuationIsActive = false;
                if (!done && observer[QueueableLike_isReady]) {
                    pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
                    continuationIsActive = true;
                }
            }
            catch (e) {
                observer[DisposableLike_dispose](error(e));
                return;
            }
        };
        observer[QueueableLike_addOnReadyListener](() => {
            if (!continuationIsActive) {
                pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
                continuationIsActive = true;
            }
        });
        pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
        continuationIsActive = true;
    });
});
export default Observable_fromAsyncIterable;
