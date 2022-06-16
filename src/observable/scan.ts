import { Factory, Reducer } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifyScan } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";

class ScanObserver<T, TAcc> extends AbstractAutoDisposingDelegatingObserver<
  T,
  TAcc
> {
  constructor(
    delegate: ObserverLike<TAcc>,
    readonly reducer: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }

  notify = notifyScan;
}

/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (observer: ObserverLike<TAcc>) =>
    new ScanObserver(observer, reducer, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
