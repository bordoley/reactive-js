import { referenceEquals } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { fromValue } from "./fromValue.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class SomeSubscriber<T> extends AbstractDelegatingSubscriber<T, boolean> {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(error => {
      if (isNone(error)) {
        fromValue()(false).subscribe(delegate);
      } else {
        delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    const passesPredicate = this.predicate(next);
    if (passesPredicate) {
      const delegate = this.delegate;
      delegate.notify(true);
      delegate.dispose();
    }
  }
}

/**
 * Returns an `ObservableLike` that emits a single `true` value if the source
 * emits any items which satisfy the predicate, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const some = <T>(
  predicate: (next: T) => boolean,
): ObservableOperator<T, boolean> => {
  const operator = (subscriber: SubscriberLike<boolean>) =>
    new SomeSubscriber(subscriber, predicate);
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
export const contains = <T>(
  value: T,
  equals: (a: T, b: T) => boolean = referenceEquals,
) => some((b: T) => equals(value, b));
