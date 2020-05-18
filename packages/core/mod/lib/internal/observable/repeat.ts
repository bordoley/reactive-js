import {
  Exception,
  dispose,
  addDisposable,
  addTeardown,
} from "../../disposable.ts";
import { pipe, Predicate, Function2 } from "../../functions.ts";
import { isNone, isSome } from "../../option.ts";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { createDelegatingObserver } from "./observer.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

const createRepeatObserver = <T>(
  delegate: ObserverLike<T>,
  observable: ObservableLike<T>,
  shouldRepeat: (count: number, error?: Exception) => boolean,
) => {
  const observer = createDelegatingObserver(delegate);

  let count = 1;

  const onDispose = (error?: Exception) => {
    let shouldComplete = false;
    try {
      shouldComplete = !shouldRepeat(count, error);
    } catch (cause) {
      shouldComplete = true;
      error = { cause, parent: error } as Exception;
    }

    if (shouldComplete) {
      dispose(delegate, error);
    } else {
      count++;
      const subscription = pipe(
        observable,
        onNotify((next: T) => delegate.notify(next)),
        subscribe(delegate),
      );
      addTeardown(subscription, onDispose);
      addDisposable(observer, subscription);
    }
  };


  addTeardown(observer, onDispose);

  return observer;
};

const repeatObs = <T>(
  shouldRepeat: (count: number, error?: Exception) => boolean,
): ObservableOperator<T, T> => observable => {
  const operator = (observer: ObserverLike<T>) =>
    createRepeatObserver(observer, observable, shouldRepeat);
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
  predicate?: Predicate<number> | number,
): ObservableOperator<T, T> {
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
export function retry<T>(): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` that mirrors the source, resubscrbing
 * if the source completes with an error which satisfies the predicate function.
 *
 * @param predicate
 */
export function retry<T>(
  predicate: Function2<number, unknown, boolean>,
): ObservableOperator<T, T>;

export function retry<T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableOperator<T, T> {
  const retryPredicate = isNone(predicate)
    ? defaultRetryPredicate
    : (count: number, error?: Exception) =>
        isSome(error) && predicate(count, error.cause);

  return repeatObs(retryPredicate);
}
