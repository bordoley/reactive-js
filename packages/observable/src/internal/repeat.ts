import { createSerialDisposable, ErrorLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
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
    delegate.add(this.innerSubscription);
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

    const delegate = this.delegate;
    if (shouldComplete) {
      delegate.dispose(error);
    } else {
      this.count++;
      this.innerSubscription.inner = pipe(
        this.observable,
        observe(this),
        subscribe(delegate),
      );
    }
  }

  onNotify(next: T) {
    this.delegate.notify(next);
  }
}

const repeatObs = <T>(
  shouldRepeat: (count: number, error?: ErrorLike) => boolean,
): ObservableOperatorLike<T, T> => observable => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new RepeatSubscriber(subscriber, observable, shouldRepeat);

  return lift(operator, true)(observable);
};

const defaultRepeatPredicate = (_: number, error?: ErrorLike): boolean =>
  error === undefined;

/**
 * Returns an `ObservableLike` that applies the predicate function each time the source
 * completes to determine if the subscription should be renewed.
 *
 * @param predicate The predicate function to apply.
 */
export function repeat<T>(
  predicate: (count: number) => boolean,
): ObservableOperatorLike<T, T>;

/**
 * Returns an `ObservableLike` that repeats the source count times.
 * @param count
 */
export function repeat<T>(count: number): ObservableOperatorLike<T, T>;

/**
 * Returns an `ObservableLike` that continually repeats the source.
 */
export function repeat<T>(): ObservableOperatorLike<T, T>;

export function repeat<T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableOperatorLike<T, T> {
  const repeatPredicate =
    predicate === undefined
      ? defaultRepeatPredicate
      : typeof predicate === "number"
      ? (count: number, error?: ErrorLike) =>
          error === undefined && count < predicate
      : (count: number, error?: ErrorLike) =>
          error === undefined && predicate(count);

  return repeatObs(repeatPredicate);
}

const defaultRetryPredicate = (_: number, error?: ErrorLike): boolean =>
  error !== undefined;

/**
 * Returns an `ObservableLike` that mirrors the source, re-subscribing
 * if the source completes with an error.
 */
export function retry<T>(): ObservableOperatorLike<T, T>;

/**
 * Returns an `ObservableLike` that mirrors the source, resubscrbing
 * if the source completes with an error which satisfies the predicate function.
 *
 * @param predicate
 */
export function retry<T>(
  predicate: (count: number, error: unknown) => boolean,
): ObservableOperatorLike<T, T>;

export function retry<T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableOperatorLike<T, T> {
  const retryPredicate =
    predicate === undefined
      ? defaultRetryPredicate
      : (count: number, error?: ErrorLike) =>
          error !== undefined && predicate(count, error.cause);

  return repeatObs(retryPredicate);
}
