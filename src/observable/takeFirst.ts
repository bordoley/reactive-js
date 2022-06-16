import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { empty } from "../container";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";
import { notifyTakeFirst } from "../sink";

class TakeFirstObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  count = 0;

  constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
    super(delegate);
  }
}
TakeFirstObserver.prototype.notify = notifyTakeFirst;

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (observer: ObserverLike<T>) =>
    new TakeFirstObserver(observer, count);
  operator.isSynchronous = true;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
