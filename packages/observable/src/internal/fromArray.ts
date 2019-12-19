import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

export const fromArray = <T>(
  values: ReadonlyArray<T>,
  delay = 0,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let startIndex = 0;

    const continuation: SchedulerContinuationLike = shouldYield => {
      const length = values.length;

      let error = undefined;

      try {
        let index = startIndex;
        while (index < length && !subscriber.isCompleted) {
          const value = values[index];
          index++;

          // Performance: Bypass safety checks and directly
          // sink notifications to the delegate.
          subscriber.nextUnsafe(value);

          if (shouldYield() || delay > 0) {
            startIndex = index;
            return continuationResult;
          }
        }
      } catch (cause) {
        error = { cause };
      }

      subscriber.complete(error);
      return;
    };
    const continuationResult: SchedulerContinuationResultLike = {
      continuation,
      delay,
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};

export const empty = <T>(delay?: number): ObservableLike<T> =>
  fromArray([], delay);

export const ofValue = <T>(value: T, delay?: number): ObservableLike<T> =>
  fromArray([value], delay);

export function fromScheduledValues<T>(
  value: [number, T],
  ...values: Array<[number, T]>
): ObservableLike<T>;
export function fromScheduledValues<T>(
  ...values: Array<[number, T]>
): ObservableLike<T> {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    const continuation: SchedulerContinuationLike = (
      shouldYield: () => boolean,
    ) => {
      while (index < values.length && !subscriber.isCompleted) {
        const [, value] = values[index];
        index++;
        subscriber.next(value);

        if (index < values.length) {
          const delay = values[index][0] || 0;

          if (delay > 0) {
            return { continuation, delay };
          } else if (shouldYield()) {
            return { continuation, delay: 0 };
          }
        }
      }

      subscriber.complete();
      return;
    };

    const [delay] = values[index];
    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
}
