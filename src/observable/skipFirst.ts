import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifySkipFirst } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";

class SkipFirstObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  count = 0;

  constructor(delegate: ObserverLike<T>, readonly skipCount: number) {
    super(delegate);
  }
}
SkipFirstObserver.prototype.notify = notifySkipFirst;

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (observer: ObserverLike<T>) =>
    new SkipFirstObserver(observer, count);
  operator.isSynchronous = true;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : observable;
};
