import { Factory, identity, isSome, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import ReactiveContainer$sinkInto from "./ReactiveContainer.sinkInto";

const ReactiveContainer$onSink = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  createReactiveContainer: (f: (onSink: TSink) => void) => C,
  src: C,
  f: Factory<DisposableOrTeardown | void>,
): C =>
  createReactiveContainer(sink => {
    pipe(src, ReactiveContainer$sinkInto(sink));

    const disposable = f() || none;
    pipe(
      sink,
      disposable instanceof Function
        ? Disposable$onDisposed(disposable)
        : isSome(disposable)
        ? Disposable$add(disposable)
        : identity,
    );
  });

export default ReactiveContainer$onSink;
