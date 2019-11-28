import { ObservableLike } from "@reactive-js/rx-observable";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

export const fromArray = <T>(
  values: ReadonlyArray<T>,
  config: {
    delay?: number;
    priority?: number;
  } = {},
): ObservableLike<T> => {
  const { delay = 0, priority } = config;

  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;
    let continuationResult: SchedulerContinuationResult;

    const continuation: SchedulerContinuation = (
      shouldYield: () => boolean,
    ) => {
      if (index < values.length && delay > 0) {
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
        return;
      }
    };

    continuationResult = { continuation, delay, priority };
    subscriber.schedule(continuation, config);
  };

  return { subscribe };
};

export const empty = <T>(config?: {
  delay?: number;
  priority?: number;
}): ObservableLike<T> => fromArray([], config);

export const ofValue = <T>(
  value: T,
  config?: {
    delay?: number;
    priority?: number;
  },
): ObservableLike<T> => fromArray([value], config);

export const fromScheduledValues = <T>(
  value: [number | undefined, number | undefined, T],
  ...values: Array<[number | undefined, number | undefined, T]>
): ObservableLike<T> => {
  const delayedValues = [value, ...values];

  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    const continuation: SchedulerContinuation = (
      shouldYield: () => boolean,
    ) => {
      while (index < delayedValues.length) {
        const [_d, _p, value] = delayedValues[index];
        index++;
        subscriber.next(value);

        if (index < delayedValues.length) {
          const delay = delayedValues[index][0] || 0;
          const priority = delayedValues[index][1];

          if (delay > 0) {
            return { continuation, delay, priority };
          } else if (shouldYield()) {
            return { continuation, delay: 0, priority };
          }
        }
      }

      subscriber.complete();
      return;
    };

    const [delay, priority, _] = delayedValues[index];
    subscriber.schedule(continuation, { delay, priority });
  };

  return { subscribe };
};
