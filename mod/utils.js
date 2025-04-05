/// <reference types="./utils.d.ts" />

import { Error, Symbol as GlobalSymbol } from "./__internal__/constants.js";
import { isNone, newInstance, raise, } from "./functions.js";
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
export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";
export const BackPressureConfig_strategy = Symbol("BackPressureConfig_strategy");
export const BackPressureConfig_capacity = Symbol("BackPressureConfig_capacity");
class BackPressureError extends Error {
    [BackPressureConfig_capacity];
    [BackPressureConfig_strategy];
    constructor(config) {
        super();
        this[BackPressureConfig_capacity] = config[BackPressureConfig_capacity];
        this[BackPressureConfig_strategy] = config[BackPressureConfig_strategy];
    }
}
export const raiseBackpressureError = (capacity) => raise(newInstance(BackPressureError, {
    [BackPressureConfig_capacity]: capacity,
    [BackPressureConfig_strategy]: ThrowBackpressureStrategy,
}));
export const FlowControllerLike_isReady = Symbol("FlowControllerLike_isReady");
export const FlowControllerLike_addOnReadyListener = Symbol("FlowControllerLike_addOnReadyListener");
export const EnumeratorLike_moveNext = Symbol("EnumeratorLike_moveNext");
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
export const AsyncEnumeratorLike_moveNext = Symbol("AsyncEnumeratorLike_moveNext");
export const AsyncEnumeratorLike_current = Symbol("AsyncEnumeratorLike_current");
export const AsyncEnumeratorLike_hasCurrent = Symbol("AsyncEnumeratorLike_hasCurrent");
export const CollectionEnumeratorLike_count = Symbol("CollectionEnumeratorLike_count");
export const CollectionEnumeratorLike_peek = Symbol("CollectionEnumeratorLike_peek");
export const QueueLike_enqueue = Symbol("QueueLike_enqueue");
export const FlowControllerEnumeratorLike_addOnDataAvailableListener = Symbol("FlowControllerEnumeratorLike_addOnDataAvailableListener");
export const FlowControllerEnumeratorLike_isDataAvailable = Symbol("FlowControllerEnumeratorLike_isDataAvailable");
export const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
export const SchedulerLike_maxYieldInterval = Symbol("SchedulerLike_maxYieldInterval");
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export class YieldDelay {
    ms;
    constructor(ms) {
        this.ms = ms;
    }
}
export const delayMs = (delay) => newInstance(YieldDelay, delay);
export const VirtualTimeSchedulerLike_run = Symbol("VirtualTimeSchedulerLike_run");
export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");
export const EventListenerLike_notify = Symbol("EventListenerLike_notify");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isCompleted = Symbol("SinkLike_isCompleted");
