import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, Exception } from "../../disposable";
import { Factory } from "../../functions";
import { none, Option } from "../../option";
import { ObservableOperator, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

class ThrowIfEmptyObserver<T> extends AbstractDelegatingObserver<T, T> {
  private isEmpty = true;

  constructor(
    delegate: ObserverLike<T>,
    private readonly factory: Factory<unknown>,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      let error: Option<Exception> = none;

      if (this.isEmpty) {
        let cause: unknown = none;
        try {
          cause = this.factory();
        } catch (e) {
          cause = e;
        }

        error = { cause };
      } 

      dispose(delegate, error);
    });
  }

  notify(next: T) {
    assertObserverState(this);

    this.isEmpty = false;
    this.delegate.notify(next);
  }
}

/**
 * Returns an `ObservableLike` that emits an error if the source completes without emitting a value.
 *
 * @param factory A factory function invoked to produce the error to be thrown.
 */
export const throwIfEmpty = <T>(
  factory: Factory<unknown>,
): ObservableOperator<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new ThrowIfEmptyObserver(observer, factory);
  operator.isSynchronous = true;
  return lift(operator);
};
