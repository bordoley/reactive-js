import { AbstractDelegatingSink, assertSinkState } from "./sink.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { Equality, strictEquality } from "../../functions.ts";
import { lift } from "./lift.ts";
import { Option } from "../../option.ts";
import { notifyDistinctUntilChanged } from "../notifyMixins.ts";

class DistinctUntilChangedSink<T> extends AbstractDelegatingSink<T, T> {
  prev: Option<T>;
  hasValue = false;

  constructor(delegate: SinkLike<T>, readonly equality: Equality<T>) {
    super(delegate);
  }

  notify(next: T) {
    assertSinkState(this);
    notifyDistinctUntilChanged(this, next);
  }
}

export const distinctUntilChanged = <T>(
  equality: Equality<T> = strictEquality,
): RunnableFunction<T, T> => {
  const operator = (observer: SinkLike<T>) =>
    new DistinctUntilChangedSink(observer, equality);
  return lift(operator);
};
