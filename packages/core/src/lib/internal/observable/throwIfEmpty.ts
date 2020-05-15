import { add, dispose } from "../../disposable";
import { Factory } from "../../functions";
import { isNone } from "../../option";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

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
): ObservableFunction<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new ThrowIfEmptyObserver(observer, factory);
  operator.isSynchronous = true;
  return lift(operator);
};
