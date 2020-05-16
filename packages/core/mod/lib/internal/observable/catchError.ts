import { Exception, dispose, add } from "../../disposable.ts";
import { Function1 } from "../../functions.ts";
import { isSome, none } from "../../option.ts";
import { ObservableLike, ObservableFunction, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingObserver } from "./observer.ts";

class CatchErrorObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: ObserverLike<T>,
    onError: Function1<unknown, ObservableLike<T> | void>,
  ) {
    super(delegate);

    add(this, error => {
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
    });
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

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
): ObservableFunction<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new CatchErrorObserver(observer, onError);
  operator.isSynchronous = false;
  return lift(operator);
};
