export declare const getDispatcher: <T>(observer: import("../rx.js").ObserverLike<T>) => import("../scheduling.js").DispatcherLike<T>;
export declare const getScheduler: <T>(observer: import("../rx.js").ObserverLike<T>) => import("../scheduling.js").SchedulerLike;
export declare const schedule: (f: import("../functions.js").SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => import("../functions.js").Function1<import("../rx.js").ObserverLike<unknown>, import("../util.js").DisposableLike>;
/** @ignore */
declare const Observer: {
    getDispatcher: <T>(observer: import("../rx.js").ObserverLike<T>) => import("../scheduling.js").DispatcherLike<T>;
    getScheduler: <T_1>(observer: import("../rx.js").ObserverLike<T_1>) => import("../scheduling.js").SchedulerLike;
    schedule: (f: import("../functions.js").SideEffect, options?: {
        readonly delay?: number | undefined;
    } | undefined) => import("../functions.js").Function1<import("../rx.js").ObserverLike<unknown>, import("../util.js").DisposableLike>;
};
export default Observer;
