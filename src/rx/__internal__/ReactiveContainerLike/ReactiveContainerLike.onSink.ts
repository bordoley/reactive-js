import { Factory, identity, isSome, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__onDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import { sinkInto } from "../../ReactiveContainerLike";

const ReactiveContainerLike__onSink = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  createReactiveContainer: (f: (onSink: TSink) => void) => C,
  src: C,
  f: Factory<DisposableOrTeardown | void>,
): C =>
  createReactiveContainer(sink => {
    pipe(src, sinkInto(sink));

    const disposable = f() || none;
    pipe(
      sink,
      disposable instanceof Function
        ? DisposableLike__onDisposed(disposable)
        : isSome(disposable)
        ? DisposableLike__add(disposable)
        : identity,
    );
  });

export default ReactiveContainerLike__onSink;
