import { Function1 } from "../../../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const SinkLike__sourceFrom: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(source: C) => Function1<TSink, TSink>;
export { SinkLike__sourceFrom as default };
