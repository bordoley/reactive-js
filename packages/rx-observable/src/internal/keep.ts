import {
  DelegatingSubscriber,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx-subscriber";
import { lift } from "./lift";
import { ObservableOperator } from "./observable";

class KeepSubscriber<T> extends DelegatingSubscriber<T, T> {
  private predicate: (data: T) => boolean;

  constructor(delegate: SubscriberLike<T>, predicate: (data: T) => boolean) {
    super(delegate);
    this.predicate = predicate;
  }

  protected onComplete(error?: Error) {
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
): SubscriberOperator<T, T> => subscriber =>
  new KeepSubscriber(subscriber, predicate);

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperator<T, T> => lift(operator(predicate));
