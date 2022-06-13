import { Keep } from "../container";
import { Predicate } from "../functions";
import { RunnableLike, RunnableOperator, SinkLike } from "../runnable";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";

class KeepSink<T> extends AbstractDelegatingSink<T, T> {
  constructor(delegate: SinkLike<T>, readonly predicate: Predicate<T>) {
    super(delegate);
  }

  notify(next: T) {
    if (this.predicate(next)) {
      this.delegate.notify(next);
    }
  }
}

export const keep = <T>(predicate: Predicate<T>): RunnableOperator<T, T> => {
  const operator = (sink: SinkLike<T>) => new KeepSink(sink, predicate);
  return lift(operator);
};

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};
