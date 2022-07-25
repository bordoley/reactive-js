import { SideEffect, Function1 } from "../functions.mjs";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, ContinuationLike, SchedulerLike } from "../scheduling.mjs";
import { DisposableLike } from "../util.mjs";
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
declare const create: (options?: {
    readonly yieldInterval?: number;
}) => SchedulerLike;
export { __yield, create, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield };
