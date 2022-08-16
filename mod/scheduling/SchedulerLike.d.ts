import { SideEffect, Function1 } from "../functions.mjs";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, SchedulerLike, PauseableSchedulerLike, PrioritySchedulerLike, VirtualTimeSchedulerLike } from "../scheduling.mjs";
import { ContinuationLike, DisposableLike } from "../util.mjs";
declare const isInContinuation: (scheduler: {
    readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean;
declare const getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
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
declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number;
}) => SchedulerLike;
declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
export { __yield, createHostScheduler, createVirtualTimeScheduler, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
