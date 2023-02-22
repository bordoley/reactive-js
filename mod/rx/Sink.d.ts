export declare const notify: <TSink extends import("../rx.js").SinkLike<T>, T>(v: T) => import("../functions.js").Function1<TSink, TSink>;
export declare const notifySink: <TSink extends import("../rx.js").SinkLike<T>, T>(sink: TSink) => import("../functions.js").SideEffect1<T>;
export declare const sourceFrom: <C extends import("../rx.js").ReactiveContainerLike<TSink>, TSink extends import("../rx.js").SinkLike<T>, T>(source: C) => import("../functions.js").Function1<TSink, TSink>;
/** @ignore */
declare const Sink: {
    notify: <TSink extends import("../rx.js").SinkLike<T>, T>(v: T) => import("../functions.js").Function1<TSink, TSink>;
    notifySink: <TSink_1 extends import("../rx.js").SinkLike<T_1>, T_1>(sink: TSink_1) => import("../functions.js").SideEffect1<T_1>;
    sourceFrom: <C extends import("../rx.js").ReactiveContainerLike<TSink_2>, TSink_2 extends import("../rx.js").SinkLike<T_2>, T_2>(source: C) => import("../functions.js").Function1<TSink_2, TSink_2>;
};
export default Sink;
