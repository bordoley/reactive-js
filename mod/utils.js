/// <reference types="./utils.d.ts" />

import { Error, Symbol as GlobalSymbol } from "./__internal__/constants.js";
import { isNone } from "./functions.js";
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
export const SerialDisposableLike_current = Symbol("SerialDisposableLike_current");
export const EventListenerLike_notify = Symbol("EventListenerLike_notify");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isCompleted = Symbol("SinkLike_isCompleted");
export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";
export const ConsumerLike_backpressureStrategy = Symbol("ConsumerLike_backpressureStrategy");
export const ConsumerLike_capacity = Symbol("ConsumerLike_capacity");
export const ConsumerLike_isReady = Symbol("ConsumerLike_isReady");
export const ConsumerLike_addOnReadyListener = Symbol("ConsumerLike_addOnReadyListener");
export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const QueueLike_count = Symbol("QueueLike_count");
/**
 * @noInheritDoc
 */
export class BackPressureError extends Error {
    [ConsumerLike_capacity];
    [ConsumerLike_backpressureStrategy];
    constructor(capacity, backpressureStrategy) {
        super();
        this[ConsumerLike_capacity] = capacity;
        this[ConsumerLike_backpressureStrategy] = backpressureStrategy;
    }
}
export const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
export const SchedulerLike_maxYieldInterval = Symbol("SchedulerLike_maxYieldInterval");
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const ContinuationContextLike_yield = Symbol("ContinuationContextLike_yield");
export const VirtualTimeSchedulerLike_run = Symbol("VirtualTimeSchedulerLike_run");
export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");
