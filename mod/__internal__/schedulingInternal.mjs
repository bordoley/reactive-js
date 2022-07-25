/// <reference types="./schedulingInternal.d.ts" />
const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
const SchedulerLike_now = Symbol("SchedulerLike_now");
const isInContinuation = (scheduler) => scheduler[SchedulerLike_inContinuation];
const getCurrentTime = (scheduler) => scheduler[SchedulerLike_now];

export { SchedulerLike_inContinuation, SchedulerLike_now, getCurrentTime, isInContinuation };
