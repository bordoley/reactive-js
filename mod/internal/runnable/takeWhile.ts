import { Predicate } from "../../functions.ts";
import { RunnableOperator, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink } from "./sink.ts";

class TakeWhileSink<T> extends AbstractDelegatingSink<T, T> {
  constructor(
    delegate: SinkLike<T>,
    private readonly predicate: Predicate<T>,
    private readonly inclusive: boolean,
  ) {
    super(delegate);
  }

  notify(next: T) {
    const satisfiesPredicate = this.predicate(next);

    if (satisfiesPredicate || this.inclusive) {
      this.delegate.notify(next);
    }

    if (!satisfiesPredicate) {
      this.done();
    }
  }
}

export const takeWhile = <T>(
  predicate: Predicate<T>,
  { inclusive } = { inclusive: false },
): RunnableOperator<T, T> => {
  const operator = (sink: SinkLike<T>) =>
    new TakeWhileSink(sink, predicate, inclusive);
  return lift(operator);
};
