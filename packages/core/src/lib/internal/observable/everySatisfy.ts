import { dispose, add } from "../../disposable";
import { Predicate, compose, negate } from "../../functions";
import { isNone } from "../../option";
import { fromValue } from "./fromValue";
import { ObservableOperator, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class EverySatisfySubscriber<T> extends AbstractDelegatingSubscriber<
  T,
  boolean
> {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: Predicate<T>,
  ) {
    super(delegate);
    add(this, error => {
      if (isNone(error)) {
        fromValue()(true).subscribe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    const failedPredicate = !this.predicate(next);
    if (failedPredicate) {
      const delegate = this.delegate;

      delegate.notify(false);
      dispose(delegate);
    }
  }
}

/**
 * Returns an `ObservableLike` that emits a single `true` value if the predicate is satisfied for
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const everySatisfy = <T>(
  predicate: Predicate<T>,
): ObservableOperator<T, boolean> => {
  const operator = (subscriber: SubscriberLike<boolean>) =>
    new EverySatisfySubscriber(subscriber, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that emits a single `true` value if the predicate does not satisfy
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const noneSatisfy = <T>(
  predicate: Predicate<T>,
): ObservableOperator<T, boolean> => everySatisfy(compose(predicate, negate));
