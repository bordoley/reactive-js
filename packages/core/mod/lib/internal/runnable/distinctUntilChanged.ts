import { AbstractDelegatingSink } from "./sink.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { Equality, strictEquality } from "../../functions.ts";
import { lift } from "./lift.ts";
import { Option, none } from "../../option.ts";
import { notifyDistinctUntilChanged } from "../notifyMixins.ts";

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
