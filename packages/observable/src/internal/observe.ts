import {
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";

class ObserveSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observer: ObserverLike<T>,
  ) {
    super(delegate);
    this.add(error => {
      try {
        observer.onDispose(error);
      } catch (cause) {
        error = { cause, parent: error } as ErrorLike;
      }
      delegate.dispose(error);
    });
  }

  notify(next: T) {
    if (!this.isDisposed) {
      this.observer.onNotify(next);
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an observable that forwards notifications to the provided observer.
 *
 * @param observer The observer that observes notifications.
 */
export function observe<T>(
  observer: ObserverLike<T>,
): ObservableOperatorLike<T, T> {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ObserveSubscriber(subscriber, observer);
  return lift(operator, true);
}

const ignore = <T>(_: T) => {};

/**
 * Returns an observable that forwards dispose notifications to the provided `onDispose` function.
 *
 * @param onDispose The function that is invoked when the observable subscription is disposed.
 */
export const onDispose = <T>(
  onDispose: (err?: ErrorLike) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNotify: ignore,
    onDispose,
  });

class OnErrorObserver<T> implements ObserverLike<T> {
  constructor(private readonly onError: (err: unknown) => void) {}

  onDispose(error?: ErrorLike) {
    if (error !== undefined) {
      const { cause } = error;
      this.onError(cause);
    }
  }

  onNotify(_: T) {}
}

/**
 * Returns an `ObservableLike` that forwards error notifications to the provided `onError` function.
 *
 * @param onError The function that is invoked when the observable subscription is disposed with an error.
 */
export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableOperatorLike<T, T> => observe(new OnErrorObserver(onError));

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify = <T>(
  onNotify: (next: T) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNotify,
    onDispose: ignore,
  });
