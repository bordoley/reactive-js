import { bindDisposables } from "../disposable";
import { Equality, strictEquality } from "../functions";
import { Option, none } from "../option";
import { RunnableOperator } from "../runnable";
import { notifyDistinctUntilChanged } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class DistinctUntilChangedSink<T> extends Sink<T> {
  prev: Option<T> = none;
  hasValue = false;

  constructor(readonly delegate: Sink<T>, readonly equality: Equality<T>) {
    super();
  }
}
DistinctUntilChangedSink.prototype.notify = notifyDistinctUntilChanged;

export const distinctUntilChanged = <T>(
  options: { readonly equality?: Equality<T> } = {},
): RunnableOperator<T, T> => {
  const { equality = strictEquality } = options;
  const operator = (delegate: Sink<T>) => {
    const sink = new DistinctUntilChangedSink(delegate, equality);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
