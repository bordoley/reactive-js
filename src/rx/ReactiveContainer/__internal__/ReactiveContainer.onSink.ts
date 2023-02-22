import {
  Factory,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import ReactiveContainer_sinkInto from "./ReactiveContainer.sinkInto.js";

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
      isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
        ? Disposable_add(disposable)
        : identity,
    );
  });

export default ReactiveContainer_onSink;
