import { add, dispose } from "../../disposable.ts";
import { Factory } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.ts";

class ThrowIfEmptyObserver<T> extends AbstractDelegatingObserver<T, T> {
  private isEmpty = true;

  constructor(
    delegate: ObserverLike<T>,
    private readonly factory: Factory<unknown>,
  ) {
    super(delegate);
    add(this, error => {
      if (isNone(error) && this.isEmpty) {
        const cause = this.factory();
        error = { cause };
      }
      dispose(this.delegate, error);
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
