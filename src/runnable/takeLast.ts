import { empty } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { notifyTakeLast } from "../sink";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Sink, sink } from "./sinks";

class TakeLastSink<T> extends Sink<T> {
  readonly last: T[] = [];

  constructor(readonly delegate: Sink<T>, readonly maxCount: number) {
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
  const operator = (delegate: Sink<T>) => {
    const sink = new TakeLastSink(delegate, count);

    addDisposable(delegate, sink);
    addOnDisposedWithError(sink, delegate);
    addTeardown(sink, onDispose);

    return sink;
  };
  return runnable =>
    count > 0 ? pipe(runnable, lift(operator)) : empty(fromArrayT);
};
