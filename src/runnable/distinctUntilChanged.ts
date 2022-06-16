import { Equality, strictEquality } from "../functions";
import { Option, none } from "../option";
import { RunnableOperator } from "../runnable";
import {
  AbstractAutoDisposingDelegatingSink,
  SinkLike,
  notifyDistinctUntilChanged,
} from "../sink";
import { lift } from "./lift";

class DistinctUntilChangedSink<T> extends AbstractAutoDisposingDelegatingSink<
  T,
  T
> {
  prev: Option<T> = none;
  hasValue = false;

  constructor(delegate: SinkLike<T>, readonly equality: Equality<T>) {
    super(delegate);
  }
}
DistinctUntilChangedSink.prototype.notify = notifyDistinctUntilChanged;

export const distinctUntilChanged = <T>(
  options: { readonly equality?: Equality<T> } = {},
): RunnableOperator<T, T> => {
  const { equality = strictEquality } = options;
  const operator = (sink: SinkLike<T>) =>
    new DistinctUntilChangedSink(sink, equality);
  return lift(operator);
};
