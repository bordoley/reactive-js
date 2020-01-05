import {
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
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
        this.observer.onDispose(error);
      } catch (cause) {
        error = { cause, parent: error } as ErrorLike;
      }
      this.delegate.dispose(error);
    });
  }

  notify(next: T) {
    if (!this.isDisposed) {
      this.observer.onNext(next);
      this.delegate.notify(next);
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

export const onDispose = <T>(
  onDispose: (err?: ErrorLike) => void,
): ObservableOperatorLike<T, T> =>
  observe({
    onNext: ignore,
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
    onDispose: ignore,
  });
