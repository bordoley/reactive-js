import { Exception, dispose, add } from "../../disposable";
import { Function } from "../../functions";
import { isSome, none } from "../../option";
import {
  ObservableLike,
  ObservableFunction,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class CatchErrorSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    onError: Function<unknown, ObservableLike<T> | void>,
  ) {
    super(delegate);

    add(this, error => {
      if (isSome(error)) {
        try {
          const { cause } = error;
          const result = onError(cause) || none;
          if (isSome(result)) {
            result.subscribe(delegate);
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
  onError: Function<unknown, ObservableLike<T> | void>,
): ObservableFunction<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new CatchErrorSubscriber(subscriber, onError);
  operator.isSynchronous = false;
  return lift(operator);
};
