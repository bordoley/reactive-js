/// <reference types="./Observable.genAsync.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import { AsyncEnumeratorLike_moveNext, ClockLike_now, ConsumableEnumeratorLike_addOnDataAvailableListener, ConsumableEnumeratorLike_isDataAvailable, DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, OverflowBackpressureStrategy, QueueableLike_enqueue, SchedulerLike_maxYieldInterval, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, SyncEnumeratorLike_moveNext, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const genFactory = (factory, options) => async (observer) => {
    const enumerator = pipe(factory(), AsyncIterator.toAsyncEnumerator(), Disposable.addTo(observer));
    const queue = pipe(Queue.createWithFlowControl({
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: options?.bufferSize ?? 32,
    }), Disposable.addTo(observer));
    let isCompleted = false;
    let dispatchSubscription = Disposable.disposed;
    function* dispatchEvents(scheduler) {
        let observerIsReady = observer[FlowControllerLike_isReady];
        let observerIsCompleted = observer[SinkLike_isCompleted];
        while (observerIsReady &&
            !observerIsCompleted &&
            queue[SyncEnumeratorLike_moveNext]()) {
            const next = queue[EnumeratorLike_current];
            observer[EventListenerLike_notify](next);
            const shouldYield = scheduler[SchedulerLike_shouldYield];
            const hasMoreData = queue[ConsumableEnumeratorLike_isDataAvailable];
            if (shouldYield && hasMoreData) {
                yield;
            }
            observerIsReady = observer[FlowControllerLike_isReady];
            observerIsCompleted = observer[SinkLike_isCompleted];
        }
        const hasMoreData = queue[ConsumableEnumeratorLike_isDataAvailable];
        if (!hasMoreData && isCompleted) {
            observer[SinkLike_complete]();
        }
    }
    const scheduleDispatcher = () => {
        if (!dispatchSubscription[DisposableLike_isDisposed]) {
            return;
        }
        dispatchSubscription = pipe(observer[SchedulerLike_schedule](dispatchEvents), Disposable.addTo(observer));
    };
    queue[ConsumableEnumeratorLike_addOnDataAvailableListener](scheduleDispatcher);
    let enumerateIsActive = false;
    const enumerate = async () => {
        const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
        const startTime = observer[ClockLike_now];
        let elapsedTime = 0;
        let queueIsReady = queue[FlowControllerLike_isReady];
        let observerIsReady = observer[FlowControllerLike_isReady];
        let observerIsCompleted = observer[SinkLike_isCompleted];
        if (enumerateIsActive || observerIsCompleted) {
            return;
        }
        enumerateIsActive = true;
        try {
            while (queueIsReady &&
                observerIsReady &&
                !observerIsCompleted &&
                elapsedTime < maxYieldInterval &&
                (await enumerator[AsyncEnumeratorLike_moveNext]())) {
                const value = enumerator[EnumeratorLike_current];
                queue[QueueableLike_enqueue](value);
                // Reassign because these values may change after
                // hopping the micro task queue
                elapsedTime = observer[ClockLike_now] - startTime;
                queueIsReady = queue[FlowControllerLike_isReady];
                observerIsReady = observer[FlowControllerLike_isReady];
                observerIsCompleted = observer[SinkLike_isCompleted];
            }
            if (queueIsReady &&
                observerIsReady &&
                elapsedTime < maxYieldInterval &&
                !observerIsCompleted) {
                isCompleted = true;
                scheduleDispatcher();
            }
        }
        catch (e) {
            observer[DisposableLike_dispose](error(e));
        }
        enumerateIsActive = false;
        // Return and let the onReadySink reschedule
        // the continuation
    };
    observer[FlowControllerLike_addOnReadyListener](enumerate);
    queue[FlowControllerLike_addOnReadyListener](enumerate);
    await Promise.resolve();
    enumerate();
};
export const Observable_genAsync = ((factory, options) => DeferredEventSource.create(genFactory(factory, options), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
}));
export const Observable_genPureAsync = ((factory, options) => DeferredEventSource.create(genFactory(factory, options), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
}));
