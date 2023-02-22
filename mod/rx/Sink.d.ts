export declare const notify: <TSink extends import("../rx.js").SinkLike<T>, T>(v: T) => import("../functions.js").Function1<TSink, TSink>;
export declare const notifySink: <TSink extends import("../rx.js").SinkLike<T>, T>(sink: TSink) => import("../functions.js").SideEffect1<T>;
export declare const sourceFrom: <C extends import("../rx.js").ReactiveContainerLike<TSink>, TSink extends import("../rx.js").SinkLike<T>, T>(source: C) => import("../functions.js").Function1<TSink, TSink>;
