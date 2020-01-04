import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AutoDisposingDelegatingSubscriber } from "./subscriber";

class TakeWhileSubscriber<T> extends AutoDisposingDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
  }

  notifyNext(data: T) {
    if (!this.isDisposed) {
      if (this.predicate(data)) {
        this.delegate.notifyNext(data);
      } else {
        this.dispose();
      }
    }
  }
}

const operator = <T>(
  predicate: (next: T) => boolean,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeWhileSubscriber(subscriber, predicate);

export const takeWhile = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, T> => liftEnumerable(operator(predicate));
