import { pipe } from "@reactive-js/pipe";
import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class SkipFirstSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private count = 0;

  constructor(delegate: SubscriberLike<T>, private readonly skipCount: number) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    if (!this.isDisposed) {
      this.count++;

      if (this.count > this.skipCount) {
        this.delegate.notify(next);
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst = <T>(count = 1): ObservableOperatorLike<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new SkipFirstSubscriber(subscriber, count);
  return observable =>
    count > 0 ? pipe(observable, lift(operator, false)) : observable;
};
