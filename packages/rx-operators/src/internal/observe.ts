import { observe, Operator } from "@reactive-js/rx-subscriber";
export { observe } from "@reactive-js/rx-subscriber";

const ignore = <T>(data: T) => {};

export const onNext = <T>(onNext: (data: T) => void): Operator<T, T> =>
  observe({
    next: onNext,
    complete: ignore,
  });

export const onComplete = <T>(
  onComplete: (err?: Error) => void,
): Operator<T, T> =>
  observe({
    next: ignore,
    complete: onComplete,
  });

export const onError = <T>(onError: (error: Error) => void): Operator<T, T> =>
  observe({
    next: ignore,
    complete: (error?: Error) => {
      if (error !== undefined) {
        onError(error);
      }
    },
  });
