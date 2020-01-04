import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { DelegatingSubscriber } from "./subscriber";
import { fromArray } from "./fromArray";

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly last: T[] = [];
  subscriber = this.delegate;

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    this.delegate.add(() => {
      this.last.length = 0;
    });
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose(error);
      if (error !== undefined) {
        this.delegate.complete(error);
      } else {
        fromArray(this.last).subscribe(this.delegate);
      }
    }
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.last.push(data);
      if (this.last.length > this.maxCount) {
        this.last.shift();
      }
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count);

export const takeLast = <T>(count = 1): ObservableOperatorLike<T, T> =>
  liftEnumerable(operator(count));
