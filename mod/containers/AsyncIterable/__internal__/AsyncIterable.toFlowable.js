/// <reference types="./AsyncIterable.toFlowable.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { error, pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import { DispatcherLike_scheduler, PauseableState_paused, SchedulerLike_now, } from "../../../scheduling.js";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
const AsyncIterable_toFlowable = (o) => (iterable) => Flowable_createLifted((modeObs) => Observable_create((observer) => {
    const { maxBuffer = MAX_SAFE_INTEGER, maxYieldInterval = 300 } = o !== null && o !== void 0 ? o : {};
    const dispatcher = Observer_getDispatcher(observer);
    const iterator = iterable[Symbol.asyncIterator]();
    const scheduler = dispatcher[DispatcherLike_scheduler];
    let isPaused = true;
    const continuation = async () => {
        const startTime = scheduler[SchedulerLike_now];
        try {
            while (!Disposable_isDisposed(dispatcher) &&
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining dispatched events.
                //
                // Check the dispatcher's buffer size so we can avoid queueing forever
                // in this situation.
                !isPaused &&
                dispatcher[QueueLike_count] < maxBuffer &&
                scheduler[SchedulerLike_now] - startTime < maxYieldInterval) {
                const next = await iterator.next();
                if (!next.done && !Disposable_isDisposed(dispatcher)) {
                    dispatcher[QueueLike_push](next.value);
                }
                else {
                    pipe(dispatcher, Disposable_dispose());
                }
            }
        }
        catch (e) {
            pipe(dispatcher, Disposable_dispose(error(e)));
        }
        if (!Disposable_isDisposed(dispatcher) && !isPaused) {
            pipe(scheduler, Scheduler_schedule(continuation), Disposable_addTo(observer));
        }
    };
    pipe(modeObs, Observable_forEach((mode) => {
        const wasPaused = isPaused;
        isPaused = mode === PauseableState_paused;
        if (!isPaused && wasPaused) {
            pipe(scheduler, Scheduler_schedule(continuation), Disposable_addTo(observer));
        }
    }), Observable_subscribe(scheduler), Disposable_bindTo(observer));
}));
export default AsyncIterable_toFlowable;
