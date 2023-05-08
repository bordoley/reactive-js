export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => import("../core.js").SchedulerLike & import("../core.js").DisposableLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../core.js").VirtualTimeSchedulerLike;
export declare const toPausableScheduler: import("../functions.js").Function1<import("../core.js").SchedulerLike, import("../core.js").PauseableSchedulerLike & import("../core.js").DisposableLike>;
