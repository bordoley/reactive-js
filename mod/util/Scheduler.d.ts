export declare const createAnimationFrameScheduler: import("../functions.js").Function1<import("../util.js").SchedulerLike, import("../util.js").SchedulerLike & import("../util.js").DisposableLike>;
export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => import("../util.js").SchedulerLike & import("../util.js").DisposableLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../util.js").VirtualTimeSchedulerLike;
export declare const toPausableScheduler: import("../functions.js").Function1<import("../util.js").SchedulerLike, import("../util.js").PauseableSchedulerLike & import("../util.js").DisposableLike>;
