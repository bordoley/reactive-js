import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class TakeFirstSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private count = 0;

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    if (!this.isDisposed) {
      this.count++;
      this.delegate.notify(next);
      if (this.count >= this.maxCount) {
        this.dispose();
      }
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new TakeFirstSubscriber(subscriber, count);
  return new SubscriberOperator(true, call);
}

export const takeFirst = <T>(
  count = 1,
): ObservableOperatorLike<T, T> => observable =>
  count > 0 ? pipe(observable, lift(operator(count))) : empty();
