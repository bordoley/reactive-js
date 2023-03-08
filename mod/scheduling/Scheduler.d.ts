import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
/**
 * @category SchedulerEffect
 */
export declare const __now: () => number;
/**
 * @category SchedulerEffect
 */
export declare const __yield: (delay?: number) => void;
export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => SchedulerLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../scheduling.js").VirtualTimeSchedulerLike;
export declare const schedule: (f: import("../functions.js").SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<SchedulerLike, import("../util.js").DisposableLike>;
export declare const toPausableScheduler: Function1<SchedulerLike, import("../scheduling.js").PauseableSchedulerLike>;
export declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
