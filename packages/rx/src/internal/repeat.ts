import { createSerialDisposable, ErrorLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";

class RepeatSubscriber<T> extends AbstractDelegatingSubscriber<T, T>
  implements ObserverLike<T> {
  private readonly innerSubscription = createSerialDisposable();
  private count = 1;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly observable: ObservableLike<T>,
    private readonly shouldRepeat: (
      count: number,
      error?: ErrorLike,
    ) => boolean,
  ) {
    super(delegate);
    this.delegate.add(this.innerSubscription);
    this.add(error => {
      this.onDispose(error);
    });
  }

  notify(next: T) {
    if (!this.isDisposed) {
      this.delegate.notify(next);
    }
  }

  onDispose(error?: ErrorLike) {
    let shouldComplete = false;
    try {
      shouldComplete = !this.shouldRepeat(this.count, error);
    } catch (cause) {
      shouldComplete = true;
      error = { cause, parent: error } as ErrorLike;
    }

    if (shouldComplete) {
      this.delegate.dispose(error);
    } else {
      this.count++;
      this.innerSubscription.inner = pipe(
        this.observable,
        observe(this),
        subscribe(this.delegate),
      );
    }
  }

  onNext(data: T) {
    this.delegate.notify(data);
  }
}

const repeatOperator = <T>(
  observable: ObservableLike<T>,
  shouldRepeat: (count: number, error?: ErrorLike) => boolean,
): SubscriberOperatorLike<T, T> => (subscriber: SubscriberLike<T>) =>
  new RepeatSubscriber(subscriber, observable, shouldRepeat);

const defaultRepeatPredicate = (_: number, error?: ErrorLike): boolean =>
  error === undefined;

export const repeat = <T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableOperatorLike<T, T> => {
  const repeatPredicate =
    predicate === undefined
      ? defaultRepeatPredicate
      : typeof predicate === "number"
      ? (count: number, error?: ErrorLike) =>
          error === undefined && count < predicate
      : (count: number, error?: ErrorLike) =>
          error === undefined && predicate(count);

  return obs => liftEnumerable(repeatOperator(obs, repeatPredicate))(obs);
};

const defaultRetryPredicate = (_: number, error?: ErrorLike): boolean =>
  error !== undefined;

export const retry = <T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableOperatorLike<T, T> => {
  const retryPredicate =
    predicate === undefined
      ? defaultRetryPredicate
      : (count: number, error?: ErrorLike) =>
          error !== undefined && predicate(count, error.cause);

  return obs => liftEnumerable(repeatOperator(obs, retryPredicate))(obs);
};
