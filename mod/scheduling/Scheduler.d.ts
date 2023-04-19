import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
import { DisposableLike } from "../util.js";
export declare const createAnimationFrameScheduler: Function1<SchedulerLike, SchedulerLike & DisposableLike>;
export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => SchedulerLike & DisposableLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../scheduling.js").VirtualTimeSchedulerLike & DisposableLike;
export declare const toPausableScheduler: Function1<SchedulerLike, import("../scheduling.js").PauseableSchedulerLike & DisposableLike>;
export declare const toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike & DisposableLike>;
