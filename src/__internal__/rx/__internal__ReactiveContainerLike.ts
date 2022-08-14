import { Factory, identity, isSome, none, pipe } from "../../functions";
import { ReactiveContainerLike } from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { DisposableOrTeardown, SinkLike } from "../../util";
import { add, onDisposed } from "../util/__internal__DisposableLike";

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
