import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { lift } from "./lift";
import { ErrorLike } from "@reactive-js/disposable";

class CatchErrorSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    onError: (error: unknown) => ObservableLike<T> | void,
  ) {
    super(delegate);

    this.add(error => {
      if (error !== undefined) {
        try {
          const { cause } = error;
          const result = onError(cause) || undefined;
          if (result !== undefined) {
            result.subscribe(delegate);
          } else {
            delegate.dispose();
          }
        } catch (cause) {
          delegate.dispose({ cause, parent: error } as ErrorLike);
        }
      } else {
        delegate.dispose();
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
  onError: (error: unknown) => ObservableLike<T> | void,
): ObservableOperatorLike<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new CatchErrorSubscriber(subscriber, onError);
  return lift(operator, false);
};
