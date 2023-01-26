import { Factory, identity, isSome, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import ReactiveContainer_sinkInto from "./ReactiveContainer.sinkInto";

const ReactiveContainer_onSink = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  createReactiveContainer: (f: (onSink: TSink) => void) => C,
  src: C,
  f: Factory<DisposableOrTeardown | void>,
): C =>
  createReactiveContainer(sink => {
    pipe(src, ReactiveContainer_sinkInto(sink));

    const disposable = f() || none;
    pipe(
      sink,
      disposable instanceof Function
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
        ? Disposable_add(disposable)
        : identity,
    );
  });

export default ReactiveContainer_onSink;
