import {
  disposed,
  dispose,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import { compose, pipe, Function1 } from "../functions";
import {
  ObservableLike,
  ObserverLike,
  ObservableOperator,
} from "../observable";
import { lift } from "./lift";
import { map } from "./map";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

class SwitchObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  private inner = disposed;

  private readonly onNotify = (next: T) => {
    this.delegate.notify(next);
  };

  constructor(delegate: ObserverLike<T>) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      if (this.inner.isDisposed) {
        pipe(delegate, dispose());
      }
    });
  }

  notify(next: ObservableLike<T>) {
    assertObserverState(this);

    pipe(this.inner, dispose());

    const inner = pipe(next, onNotify(this.onNotify), subscribe(this.delegate));
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
