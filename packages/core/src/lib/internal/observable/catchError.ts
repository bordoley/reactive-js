import { Exception, dispose, addDisposableOrTeardown } from "../../disposable";
import { Function1, pipe } from "../../functions";
import { isSome, none } from "../../option";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { createDelegatingObserver } from "./observer";

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
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      delegate,
      createDelegatingObserver,
      addDisposableOrTeardown(error => {
        if (isSome(error)) {
          try {
            const { cause } = error;
            const result = onError(cause) || none;
            if (isSome(result)) {
              result.observe(delegate);
            } else {
              dispose(delegate);
            }
          } catch (cause) {
            dispose(delegate, { cause, parent: error } as Exception);
          }
        } else {
          dispose(delegate);
        }
      }),
    );

  operator.isSynchronous = false;
  return lift(operator);
};
