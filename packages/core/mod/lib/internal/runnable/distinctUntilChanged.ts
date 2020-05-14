import { AbstractDelegatingSink } from "./sink.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { Equality, strictEquality } from "../../functions.ts";
import { lift } from "./lift.ts";
import { Option } from "../../option.ts";

class DistinctUntilChangedSink<T> extends AbstractDelegatingSink<T, T> {
  private prev: Option<T>;
  private hasValue = false;

  constructor(delegate: SinkLike<T>, private readonly equality: Equality<T>) {
    super(delegate);
  }

  notify(next: T) {
    const shouldEmit =
      !this.isDone && (!this.hasValue || !this.equality(this.prev as T, next));

    if (shouldEmit) {
      this.prev = next;
      this.hasValue = true;
      this.delegate.notify(next);
    }
  }
}

export const distinctUntilChanged = <T>(
  equality: Equality<T> = strictEquality,
): RunnableFunction<T, T> => {
  const operator = (observer: SinkLike<T>) =>
    new DistinctUntilChangedSink(observer, equality);
  return lift(operator);
};
