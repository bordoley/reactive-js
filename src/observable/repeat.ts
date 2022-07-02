import { Repeat } from "../container";
import { Error, addTo, dispose, onDisposed } from "../disposable";
import { Function2, Predicate, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer, createDelegatingObserver, getScheduler } from "../observer";
import { isNone, isSome } from "../option";
import { notifySink } from "../source";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

const createRepeatObserver = <T>(
  delegate: Observer<T>,
  observable: ObservableLike<T>,
  shouldRepeat: (count: number, error?: Error) => boolean,
) => {
  let count = 1;

  const doOnDispose = (error?: Error) => {
    let shouldComplete = false;
    try {
      shouldComplete = !shouldRepeat(count, error);
    } catch (cause) {
      shouldComplete = true;
      error = { cause, parent: error } as Error;
    }

    if (shouldComplete) {
      pipe(delegate, dispose(error));
    } else {
      count++;

      pipe(
        observable,
        onNotify(notifySink(delegate)),
        subscribe(getScheduler(delegate)),
        addTo(delegate, true),
        onDisposed(doOnDispose),
      );
    }
  };

  return pipe(
    createDelegatingObserver(delegate),
    addTo(delegate, true),
    onDisposed(doOnDispose),
  );
};

const repeatObs =
  <T>(
    shouldRepeat: (count: number, error?: Error) => boolean,
  ): ObservableOperator<T, T> =>
  observable => {
    const operator = (observer: Observer<T>) =>
      createRepeatObserver(observer, observable, shouldRepeat);

    return lift(operator, true)(observable);
  };

const defaultRepeatPredicate = (_: number, error?: Error): boolean =>
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
    ? (count: number, error?: Error) => isNone(error) && count < predicate
    : (count: number, error?: Error) => isNone(error) && predicate(count);

  return repeatObs(repeatPredicate);
}

export const repeatT: Repeat<ObservableLike<unknown>> = {
  repeat,
};

const defaultRetryPredicate = (_: number, error?: Error): boolean =>
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
    : (count: number, error?: Error) =>
        isSome(error) && predicate(count, error.cause);

  return repeatObs(retryPredicate);
}
