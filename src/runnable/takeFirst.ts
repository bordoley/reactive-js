import { pipe } from "../functions";
import { RunnableOperator, SinkLike } from "../runnable";
import { empty } from "../container";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink, assertSinkState } from "./sink";
import { dispose } from "../disposable";

class TakeFirstSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  private count = 0;

  constructor(delegate: SinkLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  notify(next: T) {
    assertSinkState(this);

    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
      pipe(this, dispose());
    }
  }
}

export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeFirstSink(sink, count);
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
