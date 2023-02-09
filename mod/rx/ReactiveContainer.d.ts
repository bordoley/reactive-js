import { Function1 } from "../functions.js";
import { ReactiveContainerLike, SinkLike } from "../rx.js";
declare const sinkInto: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(sink: TSink) => Function1<C, C>;
/** @ignore */
declare const ReactiveContainer: {
    sinkInto: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(sink: TSink) => Function1<C, C>;
};
export { ReactiveContainer as default, sinkInto };
