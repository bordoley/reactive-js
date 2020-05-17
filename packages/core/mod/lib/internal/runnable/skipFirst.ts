import { pipe } from "../../functions.ts";
import { RunnableOperator, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink } from "./sink.ts";

class SkipFirstSink<T> extends AbstractDelegatingSink<T, T> {
  count = 0;

  constructor(delegate: SinkLike<T>, readonly skipCount: number) {
    super(delegate);
  }

  notify(next: T) {
    this.count++;
    if (this.count > this.skipCount) {
      this.delegate.notify(next);
    }
  }
}

export const skipFirst = <T>(count = 1): RunnableOperator<T, T> => {
  const operator = (sink: SinkLike<T>) => new SkipFirstSink(sink, count);
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};
