import { SchedulerLike_inContinuation } from "../../../scheduling.mjs";
declare const isInContinuation: (scheduler: {
    readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean;
export { isInContinuation };
