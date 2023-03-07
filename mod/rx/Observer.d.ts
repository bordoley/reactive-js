export declare const notifyObserver: <T>(observer: import("../rx.js").ObserverLike<T>) => import("../functions.js").SideEffect1<T>;
export declare const schedule: (f: import("../functions.js").SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => import("../functions.js").Function1<import("../rx.js").ObserverLike<unknown>, import("../util.js").DisposableLike>;
export declare const sourceFrom: <C extends import("../rx.js").ObservableLike<unknown>, TObserver extends import("../rx.js").ObserverLike<T>, T>(source: C) => import("../functions.js").Function1<TObserver, TObserver>;
