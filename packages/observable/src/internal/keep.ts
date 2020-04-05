import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class KeepTypeSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(
    delegate: SubscriberLike<TB>,
    private readonly predicate: (data: unknown) => data is TB,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: TA) {
    if (!this.isDisposed && this.predicate(next)) {
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keepType = <TA, TB>(
  predicate: (data: unknown) => data is TB,
): ObservableOperatorLike<TA, TB> => {
  const operator = (subscriber: SubscriberLike<TB>) =>
    new KeepTypeSubscriber(subscriber, predicate);
  return lift(operator, true);
};

/**
 * Returns an `ObservableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperatorLike<T, T> =>
  keepType(predicate as (data: unknown) => data is T);
