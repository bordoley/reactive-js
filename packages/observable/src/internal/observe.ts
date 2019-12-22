import {
  ErrorLike,
  ObserverLike,
  SubscriberLike,
  DelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observer: ObserverLike<T>,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      try {
        this.observer.onComplete(error);
      } catch (cause) {
        error = { cause, parent: error } as ErrorLike;
      }
      this.delegate.complete(error);
    }
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.observer.onNext(data);
      this.delegate.next(data);
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
export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableOperatorLike<T, T> => lift(operator(observer));

const ignore = <T>(_: T) => {};

export const onComplete = <T>(
  onComplete: (err?: ErrorLike) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNext: ignore,
    onComplete,
  });

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNext: ignore,
    onComplete: (error?: ErrorLike) => {
      if (error !== undefined) {
        const { cause } = error;
        onError(cause);
      }
    },
  });

export const onNext = <T>(
  onNext: (next: T) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNext,
    onComplete: ignore,
  });
