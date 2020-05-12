import { dispose } from "../../disposable";
import { pipe } from "../../functions";
import { isSome } from "../../option";
import { empty } from "./empty";
import { fromArray } from "./fromArray";
import { ObservableOperator, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class TakeLastSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private readonly last: T[] = [];

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    const last = this.last;

    delegate.add(() => {
      last.length = 0;
    });

    this.add(error => {
      if (isSome(error)) {
        dispose(delegate, error);
      } else {
        fromArray()(last).subscribe(delegate);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

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
export const takeLast = <T>(count = 1): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new TakeLastSubscriber(subscriber, count);
  operator.isSynchronous = false;
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
