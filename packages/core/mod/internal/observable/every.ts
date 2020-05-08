import { isNone } from "../../option.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { fromValue } from "./fromValue.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class EverySubscriber<T> extends AbstractDelegatingSubscriber<T, boolean> {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(error => {
      if (isNone(error)) {
        fromValue()(true).subscribe(delegate);
      } else {
        delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    const failedPredicate = !this.predicate(next);
    if (failedPredicate) {
      const delegate = this.delegate;

      delegate.notify(false);
      delegate.dispose();
    }
  }
}

/**
 * Returns an `ObservableLike` that emits a single `true` value if the predicate is satisfied for
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const every = <T>(
  predicate: (next: T) => boolean,
): ObservableOperator<T, boolean> => {
  const operator = (subscriber: SubscriberLike<boolean>) =>
    new EverySubscriber(subscriber, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that emits a single `true` value if the predicate does not satisfy
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const none = <T>(
  predicate: (next: T) => boolean,
): ObservableOperator<T, boolean> => every(next => !predicate(next));
