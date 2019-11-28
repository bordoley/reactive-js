import { ObserverLike } from "@reactive-js/rx-observer";
import { observe as subscriberObserveOperator } from "@reactive-js/rx-subscriber";
import { lift } from "./lift";
import { ObservableOperator } from "./observable";

/**
 * Returns a ObservableOperator which forwards notifications to the provided observer.
 *
 * @param observer
 */
export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableOperator<T, T> => lift(subscriberObserveOperator(observer));

const ignore = <T>(data: T) => {};

export const onComplete = <T>(
  onComplete: (err?: Error) => void,
): ObservableOperator<T, T> =>
  observe({
    next: ignore,
    complete: onComplete,
  });

export const onError = <T>(
  onError: (err: Error) => void,
): ObservableOperator<T, T> =>
  observe({
    next: ignore,
    complete: (error?: Error) => {
      if (error !== undefined) {
        onError(error);
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
