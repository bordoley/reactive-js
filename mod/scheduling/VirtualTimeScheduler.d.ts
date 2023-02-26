export declare const create: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../scheduling.js").VirtualTimeSchedulerLike;
export declare const run: import("../functions.js").Updater<import("../scheduling.js").VirtualTimeSchedulerLike>;
