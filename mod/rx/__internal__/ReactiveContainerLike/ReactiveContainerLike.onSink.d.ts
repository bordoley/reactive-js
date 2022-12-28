import { Factory } from "../../../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
import { DisposableOrTeardown } from "../../../util.mjs";
declare const onSink: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(createReactiveContainer: (f: (onSink: TSink) => void) => C, src: C, f: Factory<DisposableOrTeardown | void>) => C;
export { onSink as default };
