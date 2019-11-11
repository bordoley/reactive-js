import {
  Notifications,
  ObservableLike,
  SchedulerLike,
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@rx-min/rx-core";

import { create } from "./create";

export const ofArray = <T>(
  values: ReadonlyArray<T>,
  delay: number | void,
): ObservableLike<T> =>
  create(subscriber => {
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
        subscriber.notify(Notifications.next, value);
        return continuationResult;
      } else {
        while (index < values.length) {
          const value = values[index];
          index++;
          subscriber.notify(Notifications.next, value);

          if (shouldYield()) {
            return continuationResult;
          }
        }

        subscriber.notify(Notifications.complete, undefined);
      }
    };

    continuationResult =
      delay !== undefined ? [continuation, delay] : continuation;

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay),
    );
  });

export const ofValue = <T>(value: T, delay: number | void): ObservableLike<T> =>
  ofArray([value], delay);

export const empty = <T>(): ObservableLike<T> => ofArray([]);

export const ofDelayedValues = <T>(
  ...values: Array<[number, T]>
): ObservableLike<T> =>
  values.length === 0
    ? empty()
    : create(subscriber => {
        let index = 0;

        const continuation: SchedulerContinuation = (
          shouldYield: () => boolean,
        ) => {
          if (subscriber.subscription.isDisposed) {
            return;
          } else {
            while (index < values.length) {
              const [_, value] = values[index];
              index++;
              subscriber.notify(Notifications.next, value);

              const delay = index < values.length ? values[index][0] : 0;

              if (delay > 0) {
                return [continuation, delay];
              } else if (shouldYield()) {
                return continuation;
              }
            }

            subscriber.notify(Notifications.complete, undefined);
          }
        };

        const [delay, _] = values[index];

        subscriber.subscription.add(
          subscriber.scheduler.schedule(continuation, delay),
        );
      });
