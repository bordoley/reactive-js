import { Function1 } from "../functions.mjs";
import { ReactiveContainerLike } from "../rx.mjs";
import { SinkLike } from "../util.mjs";
declare const sinkInto: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(sink: TSink) => Function1<C, C>;
export { sinkInto };
