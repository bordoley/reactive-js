import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class KeepSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (data: T) => boolean,
  ) {
    super(delegate);
  }

  completeUnsafe(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  nextUnsafe(data: T) {
    const shouldKeep = this.predicate(data);
    if (shouldKeep) {
      this.delegate.nextUnsafe(data);
    }
  }
}

const operator = <T>(
  predicate: (data: T) => boolean,
): SubscriberOperatorLike<T, T> => subscriber =>
  new KeepSubscriber(subscriber, predicate);

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperatorLike<T, T> => lift(operator(predicate));
