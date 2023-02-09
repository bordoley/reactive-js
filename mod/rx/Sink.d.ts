import { Function1, SideEffect1 } from "../functions.js";
import { SinkLike, ReactiveContainerLike } from "../rx.js";
declare const notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
declare const sourceFrom: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(source: C) => Function1<TSink, TSink>;
/** @ignore */
declare const Sink: {
    notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
    notifySink: <TSink_1 extends SinkLike<T_1>, T_1>(sink: TSink_1) => SideEffect1<T_1>;
    sourceFrom: <C extends ReactiveContainerLike<TSink_2>, TSink_2 extends SinkLike<T_2>, T_2>(source: C) => Function1<TSink_2, TSink_2>;
};
export { Sink as default, notify, notifySink, sourceFrom };
