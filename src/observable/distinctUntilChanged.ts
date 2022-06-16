import { Equality, strictEquality } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { Option } from "../option";
import { notifyDistinctUntilChanged } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";

class DistinctUntilChangedObserver<
  T,
> extends AbstractAutoDisposingDelegatingObserver<T, T> {
  prev: Option<T>;
  hasValue = false;

  constructor(delegate: ObserverLike<T>, readonly equality: Equality<T>) {
    super(delegate);
  }

  notify = notifyDistinctUntilChanged;
}

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
export const distinctUntilChanged = <T>(
  options: { readonly equality?: Equality<T> } = {},
): ObservableOperator<T, T> => {
  const { equality = strictEquality } = options;
  const operator = (observer: ObserverLike<T>) =>
    new DistinctUntilChangedObserver(observer, equality);
  operator.isSynchronous = true;
  return lift(operator);
};
