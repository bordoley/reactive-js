import { Function1 } from "../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../rx.mjs";
declare const sinkInto: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(sink: TSink) => Function1<C, C>;
export { sinkInto };
