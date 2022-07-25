/// <reference types="./scheduling.d.ts" />
const ContinuationLike_run = Symbol("ContinuationLike_run");
const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
const SchedulerLike_now = Symbol("SchedulerLike_now");
const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

export { ContinuationLike_run, DispatcherLike_dispatch, DispatcherLike_scheduler, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield };
