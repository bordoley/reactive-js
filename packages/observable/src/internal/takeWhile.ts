import { AbstractDelegatingSubscriber, SubscriberLike } from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class TakeWhileSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
  }

  next(data: T) {
    if (!this.isDisposed) {
      if (this.predicate(data)) {
        this.delegate.next(data);
      } else {
        this.complete();
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
): ObservableOperatorLike<T, T> => lift(operator(predicate));
