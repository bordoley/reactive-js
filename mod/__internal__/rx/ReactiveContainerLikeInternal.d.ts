import { Factory } from "../../functions.mjs";
import { ReactiveContainerLike } from "../../rx.mjs";
import { SinkLike, DisposableOrTeardown } from "../../util.mjs";
declare const createOnSink: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(createReactiveContainer: (f: (onSink: TSink) => void) => C, src: C, f: Factory<DisposableOrTeardown | void>) => C;
export { createOnSink };
