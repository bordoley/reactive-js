import {
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";
import { SubscriberOperator } from "./subscriberOperator";

class ObserveSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observer: ObserverLike<T>,
  ) {
    super(delegate);
    this.add(error => {
      try {
        this.observer.onDispose(error);
      } catch (cause) {
        error = { cause, parent: error } as ErrorLike;
      }
      this.delegate.dispose(error);
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
 * Returns a ObservableOperatorLike which forwards notifications to the provided observer.
 *
 * @param observer
 */
export function observe<T>(
  observer: ObserverLike<T>,
): ObservableOperatorLike<T, T> {
  const call = (subscriber: SubscriberLike<T>) =>
    new ObserveSubscriber(subscriber, observer);
  return lift(new SubscriberOperator(true, call));
}

const ignore = <T>(_: T) => {};

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

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableOperatorLike<T, T> => observe(new OnErrorObserver(onError));

export const onNotify = <T>(
  onNotify: (next: T) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNotify,
    onDispose: ignore,
  });
