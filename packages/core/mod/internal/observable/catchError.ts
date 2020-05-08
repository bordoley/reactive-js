import { Exception } from "../../disposable.ts";
import { isSome, none } from "../../option.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSubscriber } from "./subscriber.ts";

class CatchErrorSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    onError: (error: unknown) => ObservableLike<T> | void,
  ) {
    super(delegate);

    this.add(error => {
      if (isSome(error)) {
        try {
          const { cause } = error;
          const result = onError(cause) || none;
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
  onError: (error: unknown) => ObservableLike<T> | void,
): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new CatchErrorSubscriber(subscriber, onError);
  operator.isSynchronous = false;
  return lift(operator);
};
