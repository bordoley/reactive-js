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
export const QueueableLike_backpressureStrategy = Symbol("QueueableLike_backpressureStrategy");
export const QueueableLike_capacity = Symbol("QueueableLike_capacity");
export const QueueableLike_enqueue = Symbol("QueueableLike_enqueue");
export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";
export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const QueueLike_count = Symbol("QueueLike_count");
/**
 * @noInheritDoc
 */
export class BackPressureError extends Error {
    [QueueableLike_capacity];
    [QueueableLike_backpressureStrategy];
    constructor(capacity, backpressureStrategy) {
        super();
        this[QueueableLike_capacity] = capacity;
        this[QueueableLike_backpressureStrategy] = backpressureStrategy;
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
export const EventListenerLike_notify = Symbol("EventListenerLike_notify");
export const DispatcherState_ready = Symbol("DispatcherState_ready");
export const DispatcherState_capacityExceeded = Symbol("DispatcherState_capacityExceeded");
export const DispatcherState_completed = Symbol("DispatcherState_completed");
export const DispatcherLike_complete = Symbol("DispatcherLike_complete");
export const DispatcherLike_state = Symbol("DispatcherLike_state");
export const ObserverLike_notify = Symbol("ObserverLike_notify");
