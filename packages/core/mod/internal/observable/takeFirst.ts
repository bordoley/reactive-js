import { pipe } from "../../functions.ts";
import { empty } from "./empty.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import { dispose } from "../../disposable.ts";

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
        dispose(this);
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(count = 1): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new TakeFirstSubscriber(subscriber, count);
  operator.isSynchronous = true;
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
