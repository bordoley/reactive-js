import { pipe } from "../functions";
import { RunnableOperator, SinkLike } from "../runnable";
import { empty } from "./empty";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";

class TakeFirstSink<T> extends AbstractDelegatingSink<T, T> {
  private count = 0;

  constructor(delegate: SinkLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  notify(next: T) {
    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
      this.done();
    }
  }
}

export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeFirstSink(sink, count);
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
