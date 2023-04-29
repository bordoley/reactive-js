export declare const createAnimationFrameScheduler: import("../functions.js").Function1<import("../scheduling.js").SchedulerLike, import("../scheduling.js").SchedulerLike & import("../util.js").DisposableLike>;
export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => import("../scheduling.js").SchedulerLike & import("../util.js").DisposableLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../scheduling.js").VirtualTimeSchedulerLike;
export declare const toPausableScheduler: import("../functions.js").Function1<import("../scheduling.js").SchedulerLike, import("../scheduling.js").PauseableSchedulerLike & import("../util.js").DisposableLike>;
