import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { lift } from "./lift";
import { ErrorLike } from "@reactive-js/disposable";
import { SubscriberOperator } from "./subscriberOperator";

class CatchErrorSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly onError: (error: unknown) => ObservableLike<T> | void,
  ) {
    super(delegate);

    this.add(error => {
      if (error !== undefined) {
        try {
          const { cause } = error;
          const result = this.onError(cause) || undefined;
          if (result !== undefined) {
            result.subscribe(this.delegate);
          } else {
            this.delegate.dispose(error);
          }
        } catch (cause) {
          this.delegate.dispose({ cause, parent: error } as ErrorLike);
        }
      } else {
        this.delegate.dispose();
      }
    });
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

/**
 * Catches errors produced by source and either continues with
 * the observable returned from the `onError` callback or propagates the error if
 * void is returned.
 *
 * @param onError a function that takes source error and either returns an observable
 * to continue with or void if the error should be propagated.
 */
export const catchError = <T>(
  onError: (error: unknown) => ObservableLike<T> | void,
): ObservableOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new CatchErrorSubscriber(subscriber, onError);
  return lift(new SubscriberOperator(false, call));
};
