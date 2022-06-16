import { Keep } from "../container";
import { Predicate } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { notifyKeep } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";

class KeepObserver<T> extends AbstractAutoDisposingDelegatingObserver<T, T> {
  constructor(delegate: ObserverLike<T>, readonly predicate: Predicate<T>) {
    super(delegate);
  }
}
KeepObserver.prototype.notify = notifyKeep;

/**
 * Returns an `ObservableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(predicate: Predicate<T>): ObservableOperator<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new KeepObserver(observer, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

export const keepT: Keep<ObservableLike<unknown>> = {
  keep,
};
