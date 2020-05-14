import {
  createSerialDisposable,
  Exception,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../../disposable.ts";
import { pipe, Predicate } from "../../functions.ts";
import { isNone, isSome } from "../../option.ts";
import { ObservableLike, ObservableFunction, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer.ts";

class RepeatObserver<T> extends AbstractDelegatingObserver<T, T> {
  private readonly innerSubscription = createSerialDisposable();
  private count = 1;

  private readonly onDispose = (error?: Exception) => {
    let shouldComplete = false;
    try {
      shouldComplete = !this.shouldRepeat(this.count, error);
    } catch (cause) {
      shouldComplete = true;
      error = { cause, parent: error } as Exception;
    }

    const delegate = this.delegate;
    if (shouldComplete) {
      dispose(delegate, error);
    } else {
      this.count++;
      this.innerSubscription.inner = pipe(
        this.observable,
        onNotify(this.onNotify),
        subscribe(delegate),
        addDisposableOrTeardown(this.onDispose),
      );
    }
  };

  private readonly onNotify = (next: T) => this.delegate.notify(next);

  constructor(
    delegate: ObserverLike<T>,
    private readonly observable: ObservableLike<T>,
    private readonly shouldRepeat: (
      count: number,
      error?: Exception,
    ) => boolean,
  ) {
    super(delegate);
    add(delegate, this.innerSubscription);
    add(this, this.onDispose);
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

    if (!this.isDisposed) {
      this.delegate.notify(next);
    }
  }
}

const repeatObs = <T>(
  shouldRepeat: (count: number, error?: Exception) => boolean,
): ObservableFunction<T, T> => observable => {
  const operator = (observer: ObserverLike<T>) =>
    new RepeatObserver(observer, observable, shouldRepeat);
  operator.isSynchronous = true;
  return lift(operator)(observable);
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
  predicate: Predicate<number>,
): ObservableFunction<T, T>;

/**
 * Returns an `ObservableLike` that repeats the source count times.
 * @param count
 */
export function repeat<T>(count: number): ObservableFunction<T, T>;

/**
 * Returns an `ObservableLike` that continually repeats the source.
 */
export function repeat<T>(): ObservableFunction<T, T>;

export function repeat<T>(
  predicate?: Predicate<number> | number,
): ObservableFunction<T, T> {
  const repeatPredicate = isNone(predicate)
    ? defaultRepeatPredicate
    : typeof predicate === "number"
    ? (count: number, error?: Exception) => isNone(error) && count < predicate
    : (count: number, error?: Exception) => isNone(error) && predicate(count);

  return repeatObs(repeatPredicate);
}

const defaultRetryPredicate = (_: number, error?: Exception): boolean =>
  isSome(error);

/**
 * Returns an `ObservableLike` that mirrors the source, re-subscribing
 * if the source completes with an error.
 */
export function retry<T>(): ObservableFunction<T, T>;

/**
 * Returns an `ObservableLike` that mirrors the source, resubscrbing
 * if the source completes with an error which satisfies the predicate function.
 *
 * @param predicate
 */
export function retry<T>(
  predicate: (count: number, error: unknown) => boolean,
): ObservableFunction<T, T>;

export function retry<T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableFunction<T, T> {
  const retryPredicate = isNone(predicate)
    ? defaultRetryPredicate
    : (count: number, error?: Exception) =>
        isSome(error) && predicate(count, error.cause);

  return repeatObs(retryPredicate);
}
