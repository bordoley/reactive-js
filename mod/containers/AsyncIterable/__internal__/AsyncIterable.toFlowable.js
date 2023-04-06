/// <reference types="./AsyncIterable.toFlowable.d.ts" />

import { bindMethod, error, pipe } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import { SchedulerLike_maxYieldInterval, SchedulerLike_now, } from "../../../scheduling.js";
import Flowable_create from "../../../streaming/Flowable/__internal__/Flowable.create.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
const AsyncIterable_toFlowable = () => (iterable) => Flowable_create((modeObs) => Observable_create((observer) => {
    const iterator = iterable[Symbol.asyncIterator]();
    const scheduler = observer[DispatcherLike_scheduler];
    const maxYieldInterval = scheduler[SchedulerLike_maxYieldInterval];
    let isPaused = true;
    const continuation = async () => {
        const startTime = scheduler[SchedulerLike_now];
        try {
            while (!observer[DisposableLike_isDisposed] &&
                !isPaused &&
                scheduler[SchedulerLike_now] - startTime < maxYieldInterval) {
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
        if (!isPaused) {
            pipe(observer, Observer_schedule(continuation));
        }
    };
    pipe(modeObs, Observable_forEach((mode) => {
        const wasPaused = isPaused;
        isPaused = mode;
        if (!isPaused && wasPaused) {
            pipe(observer, Observer_schedule(continuation));
        }
    }), Observable_subscribeWithConfig(observer), Disposable_addTo(observer), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)));
}));
export default AsyncIterable_toFlowable;
