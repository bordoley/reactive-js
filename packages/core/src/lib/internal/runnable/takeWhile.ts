import { Predicate } from "../../functions";
import { RunnableFunction, SinkLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";

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
): RunnableFunction<T, T> => {
  const operator = (sink: SinkLike<T>) =>
    new TakeWhileSink(sink, predicate, inclusive);
  return lift(operator);
};
