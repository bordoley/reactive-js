import { pipe } from "@reactive-js/pipe";
import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { empty } from "./empty";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { fromArray } from "./fromArray";

class TakeLastSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private readonly last: T[] = [];

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    const last = this.last;

    delegate.add(() => {
      last.length = 0;
    });

    this.add(error => {
      if (error !== undefined) {
        delegate.dispose(error);
      } else {
        fromArray(last).subscribe(delegate);
      }
    });
  }

  notify(next: T) {
    if (!this.isDisposed) {
      const last = this.last;

      last.push(next);

      if (last.length > this.maxCount) {
        last.shift();
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast = <T>(count = 1): ObservableOperatorLike<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new TakeLastSubscriber(subscriber, count);
  return observable =>
    count > 0 ? pipe(observable, lift(operator, true)) : empty();
};
