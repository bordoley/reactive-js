import { Exception } from "../../disposable";
import { isSome } from "../../option";
import { ObservableOperator, ObserverLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

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
        error = { cause, parent: error } as Exception;
      }
      delegate.dispose(error);
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

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
): ObservableOperator<T, T> {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ObserveSubscriber(subscriber, observer);
  operator.isSynchronous = true;
  return lift(operator);
}

const ignore = <T>(_: T) => {};

/**
 * Returns an observable that forwards dispose notifications to the provided `onDispose` function.
 *
 * @param onDispose The function that is invoked when the observable subscription is disposed.
 */
export const onDispose = <T>(
  onDispose: (err?: Exception) => void,
): ObservableOperator<T, T> =>
  observe({
    onNotify: ignore,
    onDispose,
  });

class OnErrorObserver<T> implements ObserverLike<T> {
  constructor(private readonly onError: (err: unknown) => void) {}

  onDispose(error?: Exception) {
    if (isSome(error)) {
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
): ObservableOperator<T, T> => observe(new OnErrorObserver(onError));

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify = <T>(
  onNotify: (next: T) => void,
): ObservableOperator<T, T> =>
  observe({
    onNotify,
    onDispose: ignore,
  });
