import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => SchedulerLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../scheduling.js").VirtualTimeSchedulerLike;
export declare const toPausableScheduler: Function1<SchedulerLike, import("../scheduling.js").PauseableSchedulerLike>;
export declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
