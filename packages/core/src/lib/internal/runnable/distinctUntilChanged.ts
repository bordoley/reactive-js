import { AbstractDelegatingSink } from "./sink";
import { RunnableFunction, SinkLike } from "./interfaces";
import { Equality, strictEquality } from "../../functions";
import { lift } from "./lift";
import { Option, none } from "../../option";
import { notifyDistinctUntilChanged } from "../notifyMixins";

class DistinctUntilChangedSink<T> extends AbstractDelegatingSink<T, T> {
  prev: Option<T> = none;
  hasValue = false;

  constructor(delegate: SinkLike<T>, readonly equality: Equality<T>) {
    super(delegate);
  }

  notify(next: T) {
    notifyDistinctUntilChanged(this, next);
  }
}

export const distinctUntilChanged = <T>(
  equality: Equality<T> = strictEquality,
): RunnableFunction<T, T> => {
  const operator = (sink: SinkLike<T>) =>
    new DistinctUntilChangedSink(sink, equality);
  return lift(operator);
};
