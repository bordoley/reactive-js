import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class KeepSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private readonly predicate: (data: T) => boolean;
  
  constructor(delegate: SubscriberLike<T>, predicate: (data: T) => boolean) {
    super(delegate);
    this.predicate = predicate;
  }

  completeUnsafe(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  nextUnsafe(data: T) {
    const shouldKeep = this.predicate(data);
    if (shouldKeep) {
      // Performance: Bypass safety checks and directly
      // sink notifications to the delegate.
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
