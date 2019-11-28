import { ObservableLike } from "@reactive-js/rx-observable";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: T,
  config: {
    delay?: number;
    priority?: number;
  } = {},
): ObservableLike<T> => {
  const { delay = 0, priority } = config;

  const subscribe = (subscriber: SubscriberLike<T>) => {
    let acc = initialValue;

    let continuationResult: SchedulerContinuationResult;
    const continuation: SchedulerContinuation = (
      shouldYield: () => boolean,
    ) => {
      if (subscriber.isDisposed) {
        return;
      } else if (delay > 0) {
        try {
          acc = generator(acc);
        } catch (error) {
          subscriber.complete(error);
          return;
        }

        subscriber.next(acc);
        return continuationResult;
      } else {
        while (true) {
          try {
            acc = generator(acc);
          } catch (error) {
            subscriber.complete(error);
            return;
          }

          subscriber.next(acc);

          if (shouldYield()) {
            return continuationResult;
          }
        }
      }
    };

    continuationResult = { continuation, delay, priority };

    subscriber.schedule(continuation, config);
  };

  return { subscribe };
};
