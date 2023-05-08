export declare const syncState: <T>(onInit: (initialValue: T) => import("../core.js").ObservableLike<import("../functions.js").Updater<T>>, onChange: (oldValue: T, newValue: T) => import("../core.js").ObservableLike<import("../functions.js").Updater<T>>, options?: {
    readonly throttleDuration?: number | undefined;
    readonly capacity?: number | undefined;
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly scheduler: import("../core.js").SchedulerLike;
} | undefined) => import("../functions.js").Function1<import("../core.js").StreamLike<import("../functions.js").Updater<T>, T>, import("../core.js").DisposableLike>;
