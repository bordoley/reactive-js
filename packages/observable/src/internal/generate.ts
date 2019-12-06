import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: T,
  delay = 0,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let acc = initialValue;

    const continuation: SchedulerContinuationLike = (
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
        do {
          try {
            acc = generator(acc);
          } catch (cause) {
            subscriber.complete({ cause });
            return;
          }

          subscriber.next(acc);
        } while (!shouldYield());

        return continuationResult;
      }
    };
    const continuationResult: SchedulerContinuationResultLike = {
      continuation,
      delay,
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};
