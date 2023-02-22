export declare const getDispatcher: <T>(observer: import("../rx.js").ObserverLike<T>) => import("../scheduling.js").DispatcherLike<T>;
export declare const getScheduler: <T>(observer: import("../rx.js").ObserverLike<T>) => import("../scheduling.js").SchedulerLike;
export declare const schedule: (f: import("../functions.js").SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => import("../functions.js").Function1<import("../rx.js").ObserverLike<unknown>, import("../util.js").DisposableLike>;
