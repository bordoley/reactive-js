/// <reference types="./AsyncIterable.toObservable.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { error, pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
const AsyncIterable_toObservable = (o) => (iterable) => Observable_create((observer) => {
    const { maxBuffer = MAX_SAFE_INTEGER } = o !== null && o !== void 0 ? o : {};
    const dispatcher = Observer_getDispatcher(observer);
    const iterator = iterable[Symbol.asyncIterator]();
    const continuation = async () => {
        try {
            while (!Disposable_isDisposed(dispatcher) &&
                // An async iterable can produce resolved promises which are immediately
                // scheduled on the microtask queue. This prevents the observer's scheduler
                // from running and draining dispatched events.
                //
                // Check the dispatcher's buffer size so we can avoid queueing forever
                // in this situation.
                dispatcher[QueueLike_count] < maxBuffer) {
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
        if (!Disposable_isDisposed(dispatcher)) {
            pipe(dispatcher[DispatcherLike_scheduler], Scheduler_schedule(continuation), Disposable_addTo(observer));
        }
    };
    pipe(dispatcher[DispatcherLike_scheduler], Scheduler_schedule(continuation), Disposable_addTo(observer));
});
export default AsyncIterable_toObservable;
