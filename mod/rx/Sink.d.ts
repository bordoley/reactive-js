export declare const notify: <TSink extends import("../rx.js").SinkLike<T>, T>(v: T) => import("../functions.js").Function1<TSink, TSink>;
export declare const notifySink: <T>(sink: import("../rx.js").SinkLike<T>) => import("../functions.js").SideEffect1<T>;
export declare const sourceFrom: <C extends import("../rx.js").ObservableLike<unknown>, TSink extends import("../rx.js").ObserverLike<T>, T>(source: C) => import("../functions.js").Function1<TSink, TSink>;
