import { add } from "../../disposable";
import { Factory, Reducer } from "../../functions";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer";

class ScanObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
  constructor(
    delegate: ObserverLike<TAcc>,
    private readonly scanner: Reducer<T, TAcc>,
    private acc: TAcc,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

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
): ObservableFunction<T, TAcc> => {
  const operator = (observer: ObserverLike<TAcc>) =>
    new ScanObserver(observer, scanner, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
