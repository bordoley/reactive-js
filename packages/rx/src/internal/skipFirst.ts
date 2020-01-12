import { pipe } from "@reactive-js/pipe";
import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

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

const operator = <T>(count: number): SubscriberOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new SkipFirstSubscriber(subscriber, count);
  return new SubscriberOperator(true, call);
};

/**
 * Returns an observable that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst = <T>(
  count = 1,
): ObservableOperatorLike<T, T> => observable =>
  count > 0 ? pipe(observable, lift(operator(count))) : observable;
