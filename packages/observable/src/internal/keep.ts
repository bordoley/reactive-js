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

  protected onComplete(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    const shouldKeep = this.predicate(data);
    if (shouldKeep) {

      // Performance: Bypass safety checks and directly
      // sink notifcations to the delegate.
      (this.delegate as any).onNext(data);
    }
  }
}

const operator = <T>(
  predicate: (data: T) => boolean,
): SubscriberOperatorLike<T, T> => subscriber =>
  subscriber instanceof AbstractDelegatingSubscriber
    ? new KeepSubscriber(subscriber, predicate)
    : subscriber;

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperatorLike<T, T> => lift(operator(predicate));
