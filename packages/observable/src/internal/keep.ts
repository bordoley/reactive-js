import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
  DelegatingSubscriber,
} from "@reactive-js/rx";
import { lift } from "./lift";

class KeepSubscriber<T> extends DelegatingSubscriber<T, T> {
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
      this.delegate.next(data);
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
