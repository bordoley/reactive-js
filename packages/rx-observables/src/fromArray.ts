import { ObservableLike, SubscriberLike } from "@reactive-js/rx-core";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

export const fromArray = <T>(
  values: ReadonlyArray<T>,
  delay: number = 0,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    let continuationResult: SchedulerContinuationResult;
    const continuation: SchedulerContinuation = (
      shouldYield: () => boolean,
    ) => {
      if (subscriber.subscription.isDisposed) {
        return;
      } else if (index < values.length && delay > 0) {
        const value = values[index];
        index++;
        subscriber.next(value);
        return continuationResult;
      } else {
        while (index < values.length) {
          const value = values[index];
          index++;
          subscriber.next(value);

          if (shouldYield()) {
            return continuationResult;
          }
        }

        subscriber.complete();
      }
    };

    continuationResult = delay > 0 ? [continuation, delay] : continuation;

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay),
    );
  };

  return { subscribe };
};

export const ofValue = <T>(value: T, delay: number = 0): ObservableLike<T> =>
  fromArray([value], delay);

export const empty = <T>(delay: number = 0): ObservableLike<T> =>
  fromArray([], delay);

export const fromDelayedValues = <T>(
  value: [number, T],
  ...values: Array<[number, T]>
): ObservableLike<T> => {
  const delayedValues = [value, ...values];

  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    const continuation: SchedulerContinuation = (
      shouldYield: () => boolean,
    ) => {
      if (subscriber.subscription.isDisposed) {
        return;
      } else {
        while (index < delayedValues.length) {
          const [_, value] = delayedValues[index];
          index++;
          subscriber.next(value);

          const delay =
            index < delayedValues.length ? delayedValues[index][0] : 0;

          if (delay > 0) {
            return [continuation, delay];
          } else if (shouldYield()) {
            return continuation;
          }
        }

        subscriber.complete();
      }
    };

    const [delay, _] = delayedValues[index];

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay),
    );
  };

  return { subscribe };
};
