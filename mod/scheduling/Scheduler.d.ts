import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield } from "../scheduling.js";
export declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number | undefined;
}) => SchedulerLike;
export declare const getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
export declare const isInContinuation: (scheduler: {
    readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean;
export declare const requestYield: (scheduler: {
    [SchedulerLike_requestYield](): void;
}) => void;
export declare const shouldYield: (scheduler: {
    [SchedulerLike_shouldYield]: boolean;
}) => boolean;
export declare const schedule: (f: import("../functions.js").SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<SchedulerLike, import("../util.js").DisposableLike>;
export declare const toPausableScheduler: Function1<SchedulerLike, import("../scheduling.js").PauseableSchedulerLike>;
export declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
/** @ignore */
declare const Scheduler: {
    createHostScheduler: (options?: {
        readonly yieldInterval?: number | undefined;
    }) => SchedulerLike;
    getCurrentTime: (scheduler: {
        readonly [SchedulerLike_now]: number;
    }) => number;
    isInContinuation: (scheduler: {
        readonly [SchedulerLike_inContinuation]: boolean;
    }) => boolean;
    requestYield: (scheduler: {
        [SchedulerLike_requestYield](): void;
    }) => void;
    shouldYield: (scheduler: {
        [SchedulerLike_shouldYield]: boolean;
    }) => boolean;
    schedule: (f: import("../functions.js").SideEffect, options?: {
        readonly delay?: number | undefined;
    } | undefined) => Function1<SchedulerLike, import("../util.js").DisposableLike>;
    toPausableScheduler: Function1<SchedulerLike, import("../scheduling.js").PauseableSchedulerLike>;
    toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
};
export default Scheduler;
