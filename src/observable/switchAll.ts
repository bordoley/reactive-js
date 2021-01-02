import {
  Error,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
  disposed,
} from "../disposable";
import { Function1, compose, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { Option, isSome } from "../option";
import { lift } from "./lift";
import { map } from "./map";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { subscribe } from "./subscribe";

function onDispose(this: SwitchObserver<unknown>, error: Option<Error>) {
  if (isSome(error) || this.inner.isDisposed) {
    pipe(this.delegate, dispose(error));
  }
}

function onNotify<T>(this: SwitchObserver<T>, next: T) {
  this.delegate.notify(next);
}

class SwitchObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  inner = disposed;

  constructor(delegate: ObserverLike<T>) {
    super(delegate);
    addTeardown(this, onDispose);
  }

  notify(next: ObservableLike<T>) {
    assertObserverState(this);

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

const operator = <T>(observer: ObserverLike<T>) => new SwitchObserver(observer);
operator.isSynchronous = false;

const switchAllInstance = lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  switchAllInstance as ObservableOperator<ObservableLike<T>, T>;

export const switchMap = <TA, TB>(
  mapper: Function1<TA, ObservableLike<TB>>,
): ObservableOperator<TA, TB> => compose(map(mapper), switchAll());
