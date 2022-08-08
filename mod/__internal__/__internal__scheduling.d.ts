declare const SchedulerLike_inContinuation: unique symbol;
declare const SchedulerLike_now: unique symbol;
declare const isInContinuation: (scheduler: {
    readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean;
declare const getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
export { SchedulerLike_inContinuation, SchedulerLike_now, getCurrentTime, isInContinuation };
