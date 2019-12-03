import { ObservableLike, SubscriberLike } from "@reactive-js/rx-core";
import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: T,
  delay: number = 0,
): ObservableLike<T> => {
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
        } catch (cause) {
          subscriber.complete({ cause });
          return;
        }

        subscriber.next(acc);
        return continuationResult;
      } else {
        while (true) {
          try {
            acc = generator(acc);
          } catch (cause) {
            subscriber.complete({ cause });
            return;
          }

          subscriber.next(acc);

          if (shouldYield()) {
            return continuationResult;
          }
        }
      }
    };

    continuationResult = { continuation, delay };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};
