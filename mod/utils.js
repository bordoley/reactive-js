/// <reference types="./utils.d.ts" />

import { Error, Symbol as GlobalSymbol } from "./__internal__/constants.js";
import { isNone, newInstance, raise, } from "./functions.js";
import { clampPositiveInteger } from "./math.js";
export const DisposableContainerLike_add = Symbol("DisposableContainerLike_add");
export const DisposableLike_dispose = 
/*@__PURE__*/ (() => {
    if (isNone(GlobalSymbol.dispose)) {
        GlobalSymbol.dispose = Symbol("dispose");
    }
    return GlobalSymbol.dispose;
})();
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
export const EnumeratorLike_moveNext = Symbol("EnumeratorLike_moveNext");
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
export const AsyncEnumeratorLike_moveNext = Symbol("AsyncEnumeratorLike_moveNext");
export const AsyncEnumeratorLike_current = Symbol("AsyncEnumeratorLike_current");
export const AsyncEnumeratorLike_hasCurrent = Symbol("AsyncEnumeratorLike_hasCurrent");
export const CollectionEnumeratorLike_count = Symbol("CollectionEnumeratorLike_count");
export const CollectionEnumeratorLike_peek = Symbol("CollectionEnumeratorLike_peek");
export const QueueableLike_enqueue = Symbol("QueueableLike_enqueue");
export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";
class CapacityExceededError extends Error {
    capacity;
    constructor(capacity) {
        super();
        this.capacity = capacity;
    }
}
export const raiseCapacityExceededError = (capacity) => raise(newInstance(CapacityExceededError, capacity));
export const QueueLike_backpressureStrategy = Symbol("QueueLike_backpressureStrategy");
export const QueueLike_capacity = Symbol("QueueLike_capacity");
export const FlowControllerLike_isReady = Symbol("FlowControllerLike_isReady");
export const FlowControllerLike_addOnReadyListener = Symbol("FlowControllerLike_addOnReadyListener");
export const ConsumableEnumeratorLike_addOnDataAvailableListener = Symbol("ConsumableEnumeratorLike_addOnDataAvailableListener");
export const ConsumableEnumeratorLike_isDataAvailable = Symbol("ConsumableEnumeratorLike_isDataAvailable");
export const ClockLike_now = Symbol("ClockLike_now");
export class YieldDelay {
    ms;
    constructor(ms) {
        this.ms = ms;
    }
}
export const delayMs = (delay) => newInstance(YieldDelay, clampPositiveInteger(delay));
export const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
export const SchedulerLike_maxYieldInterval = Symbol("SchedulerLike_maxYieldInterval");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const VirtualTimeSchedulerLike_run = Symbol("VirtualTimeSchedulerLike_run");
export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");
export const EventListenerLike_notify = Symbol("EventListenerLike_notify");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isCompleted = Symbol("SinkLike_isCompleted");
export const ObserverLike_mustNotifyInSchedulerContinuation = Symbol("ObserverLike_mustNotifyInSchedulerContinuation");
