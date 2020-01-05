import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class TakeWhileSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    if (!this.isDisposed) {
      if (this.predicate(next)) {
        this.delegate.notify(next);
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
