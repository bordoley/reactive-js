import {
  DelegatingSubscriber,
  ErrorLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class TakeSubscriber<T> extends DelegatingSubscriber<T, T> {
  private count = -1;
  private readonly maxCount: number;
  constructor(delegate: SubscriberLike<T>, maxCount: number) {
    super(delegate);
    this.maxCount = maxCount;
  }

  protected onComplete(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.count++;
    if (this.count < this.maxCount) {
      this.delegate.next(data);
    } else if (this.count === this.maxCount) {
      this.delegate.complete();
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeSubscriber(subscriber, count);

export const take = <T>(count: number): ObservableOperatorLike<T, T> =>
  lift(operator(count));
