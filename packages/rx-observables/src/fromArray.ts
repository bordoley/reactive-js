import { ObservableLike, SubscriberLike } from "@reactive-js/rx-core";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

export const fromArray = <T>(
  values: ReadonlyArray<T>,
  delay: number = 0,
  priority?: number,
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
        // FIXME: Remove the inner subscription frm the subscrier.
      }
    };

    continuationResult = { continuation, delay, priority };

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay, priority),
    );
  };

  return { subscribe };
};

export const ofValue = <T>(value: T, delay: number = 0): ObservableLike<T> =>
  fromArray([value], delay);

export const empty = <T>(delay: number = 0): ObservableLike<T> =>
  fromArray([], delay);

export const fromScheduledValues = <T>(
  value: [number, number | undefined, T],
  ...values: Array<[number, number| undefined, T]>
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
          const [_d, _p, value] = delayedValues[index];
          index++;
          subscriber.next(value);

          const delay =
            index < delayedValues.length ? delayedValues[index][0] : 0;

          const priority =
            index < delayedValues.length ? delayedValues[index][1] : 0;

          if (delay > 0) {
            return {continuation, delay, priority};
          } else if (shouldYield()) {
            return {continuation, delay: 0, priority};
          }
        }

        subscriber.complete();
        // FIXME: Remove the inner subscription frm the subscrier.
      }
    };

    const [delay, priority, _] = delayedValues[index];

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay, priority),
    );
  };

  return { subscribe };
};
