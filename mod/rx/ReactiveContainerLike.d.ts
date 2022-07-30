import { Function1 } from "../functions.mjs";
import { ReactiveContainerLike } from "../rx.mjs";
import { SinkLike } from "../util.mjs";
declare const sinkInto: <C extends ReactiveContainerLike<TSink, T>, TSink extends SinkLike<T>, T>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveContainerLike<TSink, T>, TSink extends SinkLike<T>, T>(source: C) => Function1<TSink, TSink>;
export { sinkInto, sourceFrom };
