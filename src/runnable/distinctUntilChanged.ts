import { Equality, strictEquality } from "../functions";
import { Option, none } from "../option";
import { RunnableOperator, SinkLike } from "../runnable";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "./sink";

class DistinctUntilChangedSink<T> extends AbstractAutoDisposingDelegatingSink<
  T,
  T
> {
  prev: Option<T> = none;
  hasValue = false;

  constructor(delegate: SinkLike<T>, readonly equality: Equality<T>) {
    super(delegate);
  }

  notify(next: T) {
    const shouldEmit = !this.hasValue || !this.equality(this.prev as T, next);

    if (shouldEmit) {
      this.prev = next;
      this.hasValue = true;
      this.delegate.notify(next);
    }
  }
}

export const distinctUntilChanged = <T>(
  options: { readonly equality?: Equality<T> } = {},
): RunnableOperator<T, T> => {
  const { equality = strictEquality } = options;
  const operator = (sink: SinkLike<T>) =>
    new DistinctUntilChangedSink(sink, equality);
  return lift(operator);
};
