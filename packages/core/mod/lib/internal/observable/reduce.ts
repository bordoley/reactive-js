import { dispose, add } from "../../disposable.ts";
import { Factory, Reducer } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import { ObservableFunction, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer.ts";

class ReduceObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
  constructor(
    delegate: ObserverLike<TAcc>,
    private readonly reducer: Reducer<T, TAcc>,
    private acc: TAcc,
  ) {
    super(delegate);
    add(this, error => {
      if (isNone(error)) {
        fromValue()(this.acc).observe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

    this.acc = this.reducer(this.acc, next);
  }
}

/**
 * Returns an `ObservableLike` that applies an accumulator function
 * over the source, returning the accumulated result when the subscription is disposed.
 *
 * @param reducer The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableFunction<T, TAcc> => {
  const operator = (observer: ObserverLike<TAcc>) =>
    new ReduceObserver(observer, reducer, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
