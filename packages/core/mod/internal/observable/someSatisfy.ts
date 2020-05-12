import { add, dispose } from "../../disposable.ts";
import { referenceEquals, Equality, Predicate } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class SomeSatisfySubscriber<T> extends AbstractDelegatingSubscriber<
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
        fromValue()(false).subscribe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    const passesPredicate = this.predicate(next);
    if (passesPredicate) {
      const delegate = this.delegate;
      delegate.notify(true);
      dispose(delegate);
    }
  }
}

/**
 * Returns an `ObservableLike` that emits a single `true` value if the source
 * emits any items which satisfy the predicate, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const someSatisfy = <T>(
  predicate: Predicate<T>,
): ObservableOperator<T, boolean> => {
  const operator = (subscriber: SubscriberLike<boolean>) =>
    new SomeSatisfySubscriber(subscriber, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that emits a single `true` value if the source
 * emits any item equal to `value`, otherwise `false`.
 *
 * @param value
 * @param equals
 */
export const contains = <T>(value: T, equals: Equality<T> = referenceEquals) =>
  someSatisfy((b: T) => equals(value, b));
