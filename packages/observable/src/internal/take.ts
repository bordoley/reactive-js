import { DelegatingSubscriber, SubscriberLike } from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class TakeSubscriber<T> extends DelegatingSubscriber<T, T> {
  private count = -1;

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.count++;
      if (this.count < this.maxCount) {
        this.delegate.next(data);
      } else {
        this.complete();
      }
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeSubscriber(subscriber, count);

export const take = <T>(count: number): ObservableOperatorLike<T, T> =>
  lift(operator(count));
