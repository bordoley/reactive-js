import { Factory, identity, isSome, none, pipe } from "../../functions";
import { ReactiveContainerLike, SinkLike } from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { DisposableOrTeardown } from "../../util";
import { add } from "../../util/__internal__/DisposableLike/DisposableLike.add";
import { onDisposed } from "../../util/__internal__/DisposableLike/DisposableLike.onDisposed";

export const createOnSink = <
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
        ? onDisposed(disposable)
        : isSome(disposable)
        ? add(disposable)
        : identity,
    );
  });
