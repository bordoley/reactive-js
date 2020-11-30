import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { fromValue } from "./fromValue";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverState,
  observe,
} from "./observer";

class ReduceObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
  constructor(
    delegate: ObserverLike<TAcc>,
    private readonly reducer: Reducer<T, TAcc>,
    private acc: TAcc,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      pipe(this.acc, fromValue(), observe(delegate));
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
