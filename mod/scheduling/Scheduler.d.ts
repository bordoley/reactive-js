import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => SchedulerLike;
export declare const getCurrentTime: (scheduler: SchedulerLike) => number;
export declare const isInContinuation: (scheduler: SchedulerLike) => boolean;
export declare const requestYield: (scheduler: SchedulerLike) => void;
export declare const shouldYield: (scheduler: SchedulerLike) => boolean;
export declare const schedule: (f: import("../functions.js").SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<SchedulerLike, import("../util.js").DisposableLike>;
export declare const toPausableScheduler: Function1<SchedulerLike, import("../scheduling.js").PauseableSchedulerLike>;
export declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
