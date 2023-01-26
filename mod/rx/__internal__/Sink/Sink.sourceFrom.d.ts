import { Function1 } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink$sourceFrom: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(source: C) => Function1<TSink, TSink>;
export { Sink$sourceFrom as default };
