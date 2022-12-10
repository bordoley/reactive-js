/// <reference types="./scheduling.d.ts" />
/** @ignore */
const ContinuationLike_run = Symbol("ContinuationLike_run");
/** @ignore */
const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
/** @ignore */
const SchedulerLike_now = Symbol("SchedulerLike_now");
/** @ignore */
const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
/** @ignore */
const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
/** @ignore */
const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
/** @ignore */
const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
/** @ignore */
const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

export { ContinuationLike_run, DispatcherLike_dispatch, DispatcherLike_scheduler, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield };
