import { ObservableLike, SubscriberLike } from "@reactive-js/rx-core";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";
import { Disposable } from "@reactive-js/disposables";

export const fromArray = <T>(
  values: ReadonlyArray<T>,
  delay: number = 0,
  priority?: number,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    let continuationResult: SchedulerContinuationResult;
    let schedulerSubscription = Disposable.disposed;

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
        subscriber.subscription.remove(schedulerSubscription);
      }
    };

    continuationResult = { continuation, delay, priority };

    schedulerSubscription = subscriber.scheduler.schedule(
      continuation,
      delay,
      priority,
    );
    subscriber.subscription.add(schedulerSubscription);
  };

  return { subscribe };
};

export const ofValue = <T>(
  value: T,
  delay?: number,
  priority?: number,
): ObservableLike<T> => fromArray([value], delay, priority);

export const empty = <T>(
  delay?: number,
  priority?: number,
): ObservableLike<T> => fromArray([], delay, priority);

export const fromScheduledValues = <T>(
  value: [number | undefined, number | undefined, T],
  ...values: Array<[number | undefined, number | undefined, T]>
): ObservableLike<T> => {
  const delayedValues = [value, ...values];

  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    let innerSubscription = Disposable.disposed;
    const continuation: SchedulerContinuation = (
      shouldYield: () => boolean,
    ) => {
      if (subscriber.subscription.isDisposed) {
        return;
      }

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
      subscriber.subscription.remove(innerSubscription);
    };

    const [delay, priority, _] = delayedValues[index];
    innerSubscription = subscriber.scheduler.schedule(
      continuation,
      delay,
      priority,
    );

    subscriber.subscription.add(innerSubscription);
  };

  return { subscribe };
};
