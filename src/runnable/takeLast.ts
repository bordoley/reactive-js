import { empty } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyTakeLast } from "../sink";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractSink, sink } from "./sinks";

class TakeLastSink<T> extends AbstractSink<T> {
  readonly last: T[] = [];

  constructor(readonly delegate: SinkLike<T>, readonly maxCount: number) {
    super();
  }
}
TakeLastSink.prototype.notify = notifyTakeLast;

function onDispose(this: TakeLastSink<unknown>) {
  pipe(this.last, fromArray(), sink(this.delegate));
  this.delegate.dispose();
}

export const takeLast = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (delegate: SinkLike<T>) => {
    const sink = new TakeLastSink(delegate, count);

    addDisposable(delegate, sink);
    addOnDisposedWithError(sink, delegate);
    addTeardown(sink, onDispose);

    return sink;
  };
  return runnable =>
    count > 0 ? pipe(runnable, lift(operator)) : empty(fromArrayT);
};
