import {
  DelegatingSubscriber,
  ErrorLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class TakeWhileSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly predicate: (next: T) => boolean;
  constructor(delegate: SubscriberLike<T>, predicate: (next: T) => boolean) {
    super(delegate);
    this.predicate = predicate;
  }

  protected onComplete(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    if (this.predicate(data)) {
      this.delegate.next(data);
    } else {
      this.complete();
    }
  }
}

const operator = <T>(
  predicate: (next: T) => boolean,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeWhileSubscriber(subscriber, predicate);

export const takeWhile = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, T> => lift(operator(predicate));
