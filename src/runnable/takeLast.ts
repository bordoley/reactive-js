import { empty } from "../container";
import { Error, addTeardown, dispose } from "../disposable";
import { pipe } from "../functions";
import { Option, isSome } from "../option";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyTakeLast } from "../sink";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sinks";

function onDispose(this: TakeLastSink<unknown>, error: Option<Error>) {
  if (isSome(error)) {
    this.last.length = 0;
    pipe(this.delegate, dispose(error));
  } else {
    fromArray()(this.last).run(this.delegate);
  }
}

class TakeLastSink<T> extends AbstractDelegatingSink<T, T> {
  readonly last: T[] = [];

  constructor(delegate: SinkLike<T>, readonly maxCount: number) {
    super(delegate);
    addTeardown(this, onDispose);
  }
}
TakeLastSink.prototype.notify = notifyTakeLast;

export const takeLast = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeLastSink(sink, count);
  return runnable =>
    count > 0 ? pipe(runnable, lift(operator)) : empty(fromArrayT);
};
