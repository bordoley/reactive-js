/// <reference types="./concurrent.d.ts" />

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
