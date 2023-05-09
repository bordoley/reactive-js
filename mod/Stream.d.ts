export declare const syncState: <T>(onInit: (initialValue: T) => import("./types.js").ObservableLike<import("./functions.js").Updater<T>>, onChange: (oldValue: T, newValue: T) => import("./types.js").ObservableLike<import("./functions.js").Updater<T>>, options?: {
    readonly throttleDuration?: number | undefined;
    readonly capacity?: number | undefined;
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly scheduler: import("./types.js").SchedulerLike;
} | undefined) => import("./functions.js").Function1<import("./types.js").StreamLike<import("./functions.js").Updater<T>, T>, import("./types.js").DisposableLike>;
