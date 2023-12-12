/// <reference types="./concurrent.d.ts" />

export const DispatcherLikeEvent_ready = Symbol("DispatcherLikeEvent_ready");
export const DispatcherLikeEvent_capacityExceeded = Symbol("DispatcherLikeEvent_capacityExceeded");
export const DispatcherLikeEvent_completed = Symbol("DispatcherLikeEvent_completed");
export const DispatcherLike_complete = Symbol("DispatcherLike_complete");
export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");
export const SchedulerLike_yield = Symbol("SchedulerLike_yield");
export const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
export const SchedulerLike_maxYieldInterval = Symbol("SchedulerLike_maxYieldInterval");
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const VirtualTimeSchedulerLike_run = Symbol("VirtualTimeSchedulerLike_run");
export const ContinuationLike_activeChild = Symbol("ContinuationLike_activeChild");
export const ContinuationLike_scheduler = Symbol("ContinuationLike_scheduler");
export const ContinuationLike_parent = Symbol("ContinuationLike_parent");
export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationLike_yield = Symbol("ContinuationLike_yield");
export const ContinuationSchedulerLike_schedule = Symbol("ContinuationSchedulerLike_schedule");
export const ObservableLike_isDeferred = Symbol("ObservableLike_isDeferred");
export const ObservableLike_isPure = Symbol("ObservableLike_isPure");
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
export const ObservableLike_observe = Symbol("ObservableLike_observe");
export const ReplayObservableLike_buffer = Symbol("ReplayObservableLike_buffer");
export const SubjectLike_observerCount = Symbol("SubjectLike_observerCount");
export const FlowableLike_flow = Symbol("FlowableLike_flow");
export const StreamLike_scheduler = Symbol("StreamLike_scheduler");
export const StreamableLike_TStream = Symbol("StreamableLike_TStream");
export const StreamableLike_stream = Symbol("StreamableLike_stream");
