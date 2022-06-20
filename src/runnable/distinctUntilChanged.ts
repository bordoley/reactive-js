import { bindDisposables } from "../disposable";
import { Equality, strictEquality } from "../functions";
import { Option, none } from "../option";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyDistinctUntilChanged } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class DistinctUntilChangedSink<T> extends AbstractSink<T> {
  prev: Option<T> = none;
  hasValue = false;

  constructor(readonly delegate: SinkLike<T>, readonly equality: Equality<T>) {
    super();
  }
}
DistinctUntilChangedSink.prototype.notify = notifyDistinctUntilChanged;

export const distinctUntilChanged = <T>(
  options: { readonly equality?: Equality<T> } = {},
): RunnableOperator<T, T> => {
  const { equality = strictEquality } = options;
  const operator = (delegate: SinkLike<T>) => {
    const sink = new DistinctUntilChangedSink(delegate, equality);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
