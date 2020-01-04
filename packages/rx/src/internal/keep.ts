import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AutoDisposingDelegatingSubscriber } from "./subscriber";

class KeepSubscriber<T> extends AutoDisposingDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (data: T) => boolean,
  ) {
    super(delegate);
  }

  notifyNext(data: T) {
    const shouldKeep = !this.isDisposed && this.predicate(data);
    if (shouldKeep) {
      this.delegate.notifyNext(data);
    }
  }
}

const operator = <T>(
  predicate: (data: T) => boolean,
): SubscriberOperatorLike<T, T> => subscriber =>
  new KeepSubscriber(subscriber, predicate);

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperatorLike<T, T> => liftEnumerable(operator(predicate));
