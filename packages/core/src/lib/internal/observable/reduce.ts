import { add, dispose } from "../../disposable";
import { Reducer, Factory } from "../../functions";
import { isNone } from "../../option";
import { fromValue } from "./fromValue";
import { ObserverLike, ObservableOperator } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

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
