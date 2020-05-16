import { Predicate, TypePredicate } from "../../functions";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer";

class KeepTypeObserver<TA, TB extends TA> extends AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> {
  constructor(
    delegate: ObserverLike<TB>,
    readonly predicate: TypePredicate<TA, TB>,
  ) {
    super(delegate);
  }

  notify(next: TA) {
    assertObserverState(this);
    if (this.predicate(next)) {
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
export const keepType = <TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
): ObservableFunction<TA, TB> => {
  const operator = (observer: ObserverLike<TB>) =>
    new KeepTypeObserver(observer, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(predicate: Predicate<T>): ObservableFunction<T, T> =>
  keepType(predicate as TypePredicate<T, T>);
