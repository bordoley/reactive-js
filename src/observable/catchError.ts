import {
  addDisposable,
  addOnDisposedWithErrorTeardown,
  addOnDisposedWithoutError,
  dispose,
} from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { isSome, none } from "../option";
import { lift } from "./lift";
import { createDelegatingObserver, sink } from "./observer";

/**
 * Returns an `ObservableLike` which catches errors produced by the source and either continues with
 * the `ObservableLike` returned from the `onError` callback or swallows the error if
 * void is returned.
 *
 * @param onError a function that takes source error and either returns an `ObservableLike`
 * to continue with or void if the error should be propagated.
 */
export const catchError = <T>(
  onError: Function1<unknown, ObservableLike<T> | void>,
): ObservableOperator<T, T> => {
  const operator = (delegate: ObserverLike<T>) => {
    const observer = createDelegatingObserver(delegate);
    addDisposable(delegate, observer);
    addOnDisposedWithoutError(observer, delegate);
    addOnDisposedWithErrorTeardown(observer, cause => {
      try {
        const result = onError(cause) || none;
        if (isSome(result)) {
          pipe(result, sink(delegate));
        } else {
          pipe(delegate, dispose());
        }
      } catch (cause) {
        pipe(delegate, dispose({ cause: { parent: cause, cause } }));
      }
    });

    return observer;
  };

  operator.isSynchronous = false;
  return lift(operator);
};
