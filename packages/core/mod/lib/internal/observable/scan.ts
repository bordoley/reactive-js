import { add } from "../../disposable.ts";
import { Factory, Reducer } from "../../functions.ts";
import { ObservableFunction, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingObserver,
  assertObserverState,
} from "./observer.ts";
import { notifyScan } from "../notifyMixins.ts";

class ScanObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
  constructor(
    delegate: ObserverLike<TAcc>,
    readonly scanner: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverState(this);
    notifyScan(this, next);
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
