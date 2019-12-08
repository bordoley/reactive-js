import {
  ErrorLike,
  ObserverLike,
  SubscriberLike,
  DelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  private observer: ObserverLike<T>;
  constructor(delegate: SubscriberLike<T>, observer: ObserverLike<T>) {
    super(delegate);
    this.observer = observer;
  }

  protected onComplete(error?: ErrorLike) {
    this.observer.complete(error);
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.observer.next(data);
    this.delegate.next(data);
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
    next: ignore,
    complete: onComplete,
  });

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    next: ignore,
    complete: (error?: ErrorLike) => {
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
    next: onNext,
    complete: ignore,
  });
