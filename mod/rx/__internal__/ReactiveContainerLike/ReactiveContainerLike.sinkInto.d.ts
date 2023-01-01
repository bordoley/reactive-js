import { Function1 } from "../../../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const ReactiveContainerLike__sinkInto: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(sink: TSink) => Function1<C, C>;
export { ReactiveContainerLike__sinkInto as default };
