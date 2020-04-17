import { createSerialDisposable, Exception } from "@reactive-js/disposable";
import { isNone, isSome } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class RepeatSubscriber<T> extends AbstractDelegatingSubscriber<T, T>
  implements ObserverLike<T> {
  private readonly innerSubscription = createSerialDisposable();
  private count = 1;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly observable: ObservableLike<T>,
    private readonly shouldRepeat: (
      count: number,
      error?: Exception,
    ) => boolean,
  ) {
    super(delegate);
    delegate.add(this.innerSubscription);
    this.add(error => {
      this.onDispose(error);
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed) {
      this.delegate.notify(next);
    }
  }

  onDispose(error?: Exception) {
    let shouldComplete = false;
    try {
      shouldComplete = !this.shouldRepeat(this.count, error);
    } catch (cause) {
      shouldComplete = true;
      error = { cause, parent: error } as Exception;
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
  shouldRepeat: (count: number, error?: Exception) => boolean,
): ObservableOperator<T, T> => observable => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new RepeatSubscriber(subscriber, observable, shouldRepeat);

  return lift(operator, true)(observable);
};

const defaultRepeatPredicate = (_: number, error?: Exception): boolean =>
  isNone(error);

/**
 * Returns an `ObservableLike` that applies the predicate function each time the source
 * completes to determine if the subscription should be renewed.
 *
 * @param predicate The predicate function to apply.
 */
export function repeat<T>(
  predicate: (count: number) => boolean,
): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` that repeats the source count times.
 * @param count
 */
export function repeat<T>(count: number): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` that continually repeats the source.
 */
export function repeat<T>(): ObservableOperator<T, T>;

export function repeat<T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableOperator<T, T> {
  const repeatPredicate =
    isNone(predicate)
      ? defaultRepeatPredicate
      : typeof predicate === "number"
      ? (count: number, error?: Exception) =>
          isNone(error) && count < predicate
      : (count: number, error?: Exception) =>
          isNone(error) && predicate(count);

  return repeatObs(repeatPredicate);
}

const defaultRetryPredicate = (_: number, error?: Exception): boolean =>
  isSome(error);

/**
 * Returns an `ObservableLike` that mirrors the source, re-subscribing
 * if the source completes with an error.
 */
export function retry<T>(): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` that mirrors the source, resubscrbing
 * if the source completes with an error which satisfies the predicate function.
 *
 * @param predicate
 */
export function retry<T>(
  predicate: (count: number, error: unknown) => boolean,
): ObservableOperator<T, T>;

export function retry<T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableOperator<T, T> {
  const retryPredicate =
    isNone(predicate)
      ? defaultRetryPredicate
      : (count: number, error?: Exception) =>
          isSome(error) && predicate(count, error.cause);

  return repeatObs(retryPredicate);
}
