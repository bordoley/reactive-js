import { pipe } from "@reactive-js/pipe";
import { empty } from "./empty";
import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class TakeFirstSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private count = 0;

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed) {
      this.count++;
      this.delegate.notify(next);
      if (this.count >= this.maxCount) {
        this.dispose();
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(count = 1): ObservableOperatorLike<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new TakeFirstSubscriber(subscriber, count);
  return observable =>
    count > 0 ? pipe(observable, lift(operator, true)) : empty();
};
