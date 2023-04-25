export declare const sinkInto: <TReq, T>(dest: import("../rx.js").StreamLike<T, TReq>) => (src: import("../rx.js").StreamLike<TReq, T>) => import("../util.js").DisposableLike;
export declare const syncState: <T>(onInit: (initialValue: T) => import("../rx.js").ObservableLike<import("../functions.js").Updater<T>>, onChange: (oldValue: T, newValue: T) => import("../rx.js").ObservableLike<import("../functions.js").Updater<T>>, options?: {
    readonly throttleDuration?: number | undefined;
    readonly capacity?: number | undefined;
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly scheduler: import("../scheduling.js").SchedulerLike;
} | undefined) => import("../functions.js").Function1<import("../rx.js").StreamLike<import("../functions.js").Updater<T>, T>, import("../util.js").DisposableLike>;
