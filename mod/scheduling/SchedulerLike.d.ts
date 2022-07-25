import { SideEffect, Function1 } from "../functions.mjs";
import { SchedulerLike_requestYield, SchedulerLike_shouldYield, SchedulerLike, PauseableSchedulerLike, PrioritySchedulerLike } from "../scheduling.mjs";
import { ContinuationLike, DisposableLike } from "../util.mjs";
export { getCurrentTime, isInContinuation } from '../__internal__/schedulingInternal.js';
declare const requestYield: (scheduler: {
    [SchedulerLike_requestYield](): void;
}) => void;
declare const shouldYield: (scheduler: {
    [SchedulerLike_shouldYield]: boolean;
}) => boolean;
declare const __yield: (options?: {
    delay?: number;
}) => void;
declare const schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
declare const toPausableScheduler: Function1<SchedulerLike, PauseableSchedulerLike>;
declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
export { __yield, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
