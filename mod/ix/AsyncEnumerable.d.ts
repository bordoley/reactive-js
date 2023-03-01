export declare const enumerate: <T>(scheduler: import("../scheduling.js").SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => (enumerable: import("../ix.js").AsyncEnumerableLike<import("../rx.js").ObservableLike<unknown>, T>) => import("../streaming.js").StreamLike<void, T>;
