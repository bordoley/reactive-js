import { Factory, Reducer } from "../../functions.ts";
import { ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer.ts";

class ScanObserver<T, TAcc> extends AbstractAutoDisposingDelegatingObserver<
  T,
  TAcc
> {
  constructor(
    delegate: ObserverLike<TAcc>,
    readonly scanner: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }

  notify(next: T) {
    assertObserverState(this);
    const nextAcc = this.scanner(this.acc, next);
    this.acc = nextAcc;

    this.delegate.notify(nextAcc);
  }
}

/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scan = <T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (observer: ObserverLike<TAcc>) =>
    new ScanObserver(observer, scanner, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
