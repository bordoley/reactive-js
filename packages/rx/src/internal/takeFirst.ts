import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AutoDisposingDelegatingSubscriber } from "./subscriber";

class TakeFirstSubscriber<T> extends AutoDisposingDelegatingSubscriber<T, T> {
  private count = 0;

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  notifyNext(data: T) {
    if (!this.isDisposed) {
      this.count++;
      this.delegate.notifyNext(data);
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
