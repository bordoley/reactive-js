/// <reference types="./concurrent.d.ts" />

import { ComputationLike_isPure, } from "./computations.js";
export const DispatcherLikeEvent_ready = Symbol("DispatcherLikeEvent_ready");
export const DispatcherLikeEvent_capacityExceeded = Symbol("DispatcherLikeEvent_capacityExceeded");
export const DispatcherLikeEvent_completed = Symbol("DispatcherLikeEvent_completed");
export const DispatcherLike_complete = Symbol("DispatcherLike_complete");
export const DispatcherLike_isCompleted = Symbol("DispatcherLike_isCompleted");
export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");
export const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
export const SchedulerLike_maxYieldInterval = Symbol("SchedulerLike_maxYieldInterval");
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const ContinuationContextLike_yield = Symbol("ContinuationContextLike_yield");
export const VirtualTimeSchedulerLike_run = Symbol("VirtualTimeSchedulerLike_run");
export const ObserverLike_notify = Symbol("ObserverLike_notify");
export const ObservableLike_isDeferred = Symbol("ObservableLike_isDeferred");
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
export const ObservableLike_observe = Symbol("ObservableLike_observe");
export const FlowableLike_flow = Symbol("FlowableLike_flow");
export const AnimationStreamLike_animation = Symbol("AnimationStreamLike_animation");
export const StreamableLike_stream = Symbol("StreamableLike_stream");
export const CacheLike_get = Symbol("CacheLike_get");
