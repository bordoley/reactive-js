import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

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
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeFirstSubscriber(subscriber, count);

export const takeFirst = <T>(
  count = 1,
): ObservableOperatorLike<T, T> => observable =>
  count > 0 ? pipe(observable, liftEnumerable(operator(count))) : empty();
