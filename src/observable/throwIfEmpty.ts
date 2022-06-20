import { Error, addTeardown, addDisposable } from "../disposable";
import { Factory } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { Option, isNone, none } from "../option";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

function onDispose(this: ThrowIfEmptyObserver<unknown>, error: Option<Error>) {
  if (isNone(error) && this.isEmpty) {
    let cause: unknown = none;
    try {
      cause = this.factory();
    } catch (e) {
      cause = e;
    }

    error = { cause };
  }

  this.delegate.dispose(error);
}

class ThrowIfEmptyObserver<T> extends AbstractDelegatingObserver<T, T> {
  isEmpty = true;

  constructor(delegate: ObserverLike<T>, readonly factory: Factory<unknown>) {
    super(delegate);
  }

  notify(next: T) {
    this.assertState();

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
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new ThrowIfEmptyObserver(delegate, factory);
    addDisposable(delegate, observer);
    addTeardown(observer, onDispose);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};
