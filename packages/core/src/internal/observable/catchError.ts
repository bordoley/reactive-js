import { Exception } from "../../disposable";
import { isSome, Option } from "../../option";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class CatchErrorSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    onError: (error: unknown) => Option<ObservableLike<T>>,
  ) {
    super(delegate);

    this.add(error => {
      if (isSome(error)) {
        try {
          const { cause } = error;
          const result = onError(cause);
          if (isSome(result)) {
            result.subscribe(delegate);
          } else {
            delegate.dispose();
          }
        } catch (cause) {
          delegate.dispose({ cause, parent: error } as Exception);
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
  onError: (error: unknown) => Option<ObservableLike<T>>,
): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new CatchErrorSubscriber(subscriber, onError);
  operator.isSynchronous = false;
  return lift(operator);
};
