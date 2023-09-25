/// <reference types="./concurrent.d.ts" />

export const SchedulerLike_yield = Symbol("SchedulerLike_yield");
export const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
export const SchedulerLike_maxYieldInterval = Symbol("SchedulerLike_maxYieldInterval");
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const VirtualTimeSchedulerLike_run = Symbol("VirtualTimeSchedulerLike_run");
export const ObservableLike_isDeferred = Symbol("ObservableLike_isDeferred");
export const ObservableLike_isPure = Symbol("ObservableLike_isPure");
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
export const ObservableLike_observe = Symbol("ObservableLike_observe");
export const ReplayObservableLike_buffer = Symbol("ReplayObservableLike_buffer");
export const StreamLike_scheduler = Symbol("StreamLike_scheduler");
export const StreamableLike_TStream = Symbol("StreamableLike_TStream");
export const StreamableLike_stream = Symbol("StreamableLike_stream");
