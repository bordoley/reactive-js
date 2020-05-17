import { add, dispose } from "../../disposable.ts";
import { Reducer, Factory } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import { ObserverLike, ObservableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.ts";

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
    assertObserverState(this);

    this.acc = this.reducer(this.acc, next);
  }
}

export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (observer: ObserverLike<TAcc>) =>
    new ReduceObserver(observer, reducer, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
