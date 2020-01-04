import {
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { DelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observer: ObserverLike<T>,
  ) {
    super(delegate);
  }

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.disposable.dispose(error);
      try {
        this.observer.onComplete(error);
      } catch (cause) {
        error = { cause, parent: error } as ErrorLike;
      }
      this.delegate.dispose(error);
    }
  }

  notifyNext(data: T) {
    if (!this.isDisposed) {
      this.observer.onNext(data);
      this.delegate.notifyNext(data);
    }
  }
}

const operator = <T>(
  observer: ObserverLike<T>,
): SubscriberOperatorLike<T, T> => (subscriber: SubscriberLike<T>) =>
  new ObserveSubscriber(subscriber, observer);

/**
 * Returns a ObservableOperatorLike which forwards notifications to the provided observer.
 *
 * @param observer
 */
export function observe<T>(
  observer: ObserverLike<T>,
): ObservableOperatorLike<T, T> {
  return liftEnumerable(operator(observer));
}

const ignore = <T>(_: T) => {};

export const onComplete = <T>(
  onComplete: (err?: ErrorLike) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNext: ignore,
    onComplete,
  });

class OnErrorObserver<T> implements ObserverLike<T> {
  constructor(private readonly onError: (err: unknown) => void) {}

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      const { cause } = error;
      this.onError(cause);
    }
  }

  onNext(_: T) {}
}

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableOperatorLike<T, T> => observe(new OnErrorObserver(onError));

export const onNext = <T>(
  onNext: (next: T) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNext,
    onComplete: ignore,
  });
