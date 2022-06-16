import { dispose } from "../disposable";
import { pipe, Predicate } from "../functions";
import { RunnableOperator, SinkLike } from "../runnable";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "./sink";

class TakeWhileSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
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
      pipe(this, dispose());
    }
  }
}

export const takeWhile = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
): RunnableOperator<T, T> => {
  const { inclusive = false } = options;
  const operator = (sink: SinkLike<T>) =>
    new TakeWhileSink(sink, predicate, inclusive);
  return lift(operator);
};
