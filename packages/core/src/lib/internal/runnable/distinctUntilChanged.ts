import { AbstractDelegatingSink, assertSinkState } from "./sink";
import { RunnableFunction, SinkLike } from "./interfaces";
import { Equality, strictEquality } from "../../functions";
import { lift } from "./lift";
import { Option } from "../../option";
import { notifyDistinctUntilChanged } from "../notifyMixins";

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
