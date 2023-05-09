export declare const createHostScheduler: (options?: {
    readonly maxYieldInterval?: number | undefined;
}) => import("./types.js").SchedulerLike & import("./types.js").DisposableLike;
export declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("./types.js").VirtualTimeSchedulerLike;
export declare const toPausableScheduler: import("./functions.js").Function1<import("./types.js").SchedulerLike, import("./types.js").PauseableSchedulerLike & import("./types.js").DisposableLike>;
