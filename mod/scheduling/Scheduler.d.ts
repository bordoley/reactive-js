import { DisposableLike } from "../util.js";
import { SideEffect, Function1 } from "../functions.js";
import { SchedulerLike, SchedulerLike_now, SchedulerLike_inContinuation, SchedulerLike_requestYield, SchedulerLike_shouldYield, ContinuationLike, PauseableSchedulerLike, PrioritySchedulerLike } from "../scheduling.js";
declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number | undefined;
}) => SchedulerLike;
declare const getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
declare const isInContinuation: (scheduler: {
    readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean;
declare const requestYield: (scheduler: {
    [SchedulerLike_requestYield](): void;
}) => void;
declare const shouldYield: (scheduler: {
    [SchedulerLike_shouldYield]: boolean;
}) => boolean;
declare const schedule: (f: ContinuationLike | SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<SchedulerLike, DisposableLike>;
declare const toPausableScheduler: Function1<SchedulerLike, PauseableSchedulerLike>;
declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
export { createHostScheduler, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
