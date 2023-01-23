import { Factory } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
declare const ReactiveContainerLike__onSink: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(createReactiveContainer: (f: (onSink: TSink) => void) => C, src: C, f: Factory<DisposableOrTeardown | void>) => C;
export { ReactiveContainerLike__onSink as default };
