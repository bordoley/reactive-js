import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { DelegatingSubscriber } from "./subscriber";

class TakeFirstSubscriber<T> extends DelegatingSubscriber<T, T> {
  private count = 0;

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.count++;
      this.delegate.next(data);
      if (this.count >= this.maxCount) {
        this.complete();
      }
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeFirstSubscriber(subscriber, count);

export const takeFirst = <T>(count = 1): ObservableOperatorLike<T, T> => observable =>
  count > 0 ? pipe(observable, lift(operator(count))) : empty();
