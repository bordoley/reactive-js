import { dispose, addOnDisposedWithoutError, addOnDisposedWithErrorTeardown } from "../../disposable.ts";
import { Function1 } from "../../functions.ts";
import { isSome, none } from "../../option.ts";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { createDelegatingObserver } from "./observer.ts";

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
    addOnDisposedWithoutError(observer, delegate);
    addOnDisposedWithErrorTeardown(observer, cause => {
      try {
        const result = onError(cause) || none;
        if (isSome(result)) {
          result.observe(delegate);
        } else {
          dispose(delegate);
        }
      } catch (cause) {
        dispose(delegate, { cause: { parent: cause, cause } });
      }
    });

    return observer;
  };

  operator.isSynchronous = false;
  return lift(operator);
};
