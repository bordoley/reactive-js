import { ErrorLike, ObserverLike, SubscriberLike } from "@reactive-js/rx-core";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { ObservableOperator } from "./pipe";

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

const operator = <T>(observer: ObserverLike<T>): SubscriberOperator<T, T> => (
  subscriber: SubscriberLike<T>,
) => new ObserveSubscriber(subscriber, observer);

/**
 * Returns a ObservableOperator which forwards notifications to the provided observer.
 *
 * @param observer
 */
export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableOperator<T, T> => lift(operator(observer));

const ignore = <T>(data: T) => {};

export const onComplete = <T>(
  onComplete: (err?: ErrorLike) => void,
): ObservableOperator<T, T> =>
  observe({
    next: ignore,
    complete: onComplete,
  });

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableOperator<T, T> =>
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
): ObservableOperator<T, T> =>
  observe({
    next: onNext,
    complete: ignore,
  });
