import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { fromArray } from "./fromArray";
import { SubscriberOperator } from "./subscriberOperator";

class TakeLastSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private readonly last: T[] = [];

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    this.delegate.add(() => {
      this.last.length = 0;
    });
    this.add(error => {
      if (error !== undefined) {
        this.delegate.dispose(error);
      } else {
        fromArray(this.last).subscribe(this.delegate);
      }
    });
  }

  notify(next: T) {
    if (!this.isDisposed) {
      this.last.push(next);
      if (this.last.length > this.maxCount) {
        this.last.shift();
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast = <T>(count = 1): ObservableOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new TakeLastSubscriber(subscriber, count);
  return lift(new SubscriberOperator(true, call));
};
