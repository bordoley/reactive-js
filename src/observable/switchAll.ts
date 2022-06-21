import { ConcatAll } from "../container";
import {
  Error,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
  disposed,
  addDisposable,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Option, isSome } from "../option";
import { lift } from "./lift";
import { Observer } from "./observer";
import { subscribe } from "./subscribe";

function onDispose(this: SwitchObserver<unknown>, error: Option<Error>) {
  if (isSome(error) || this.inner.isDisposed) {
    pipe(this.delegate, dispose(error));
  }
}

function onNotify<T>(this: SwitchObserver<T>, next: T) {
  this.delegate.notify(next);
}

class SwitchObserver<T> extends Observer<ObservableLike<T>> {
  inner = disposed;

  constructor(readonly delegate: Observer<T>) {
    super(delegate);
  }

  notify(next: ObservableLike<T>) {
    this.assertState();

    pipe(this.inner, dispose());

    const inner = pipe(next, subscribe(this.delegate, onNotify, this));
    addDisposableDisposeParentOnChildError(this.delegate, inner);
    addOnDisposedWithoutErrorTeardown(inner, () => {
      if (this.isDisposed) {
        pipe(this.delegate, dispose());
      }
    });

    this.inner = inner;
  }
}

const operator = <T>(delegate: Observer<T>) => {
  const observer = new SwitchObserver(delegate);
  addDisposable(delegate, observer);
  addTeardown(observer, onDispose);
  return observer;
};
operator.isSynchronous = false;

const switchAllInstance = lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  switchAllInstance as ObservableOperator<ObservableLike<T>, T>;

export const switchAllT: ConcatAll<
  ObservableLike<unknown>,
  Record<string, never>
> = {
  concatAll: switchAll,
};
