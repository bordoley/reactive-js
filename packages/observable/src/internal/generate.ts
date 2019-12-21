import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let acc = initialValue();

    const continuation: SchedulerContinuationLike = (
      shouldYield: () => boolean,
    ) => {
      try {
        do {
          subscriber.next(acc);
          acc = generator(acc);
        } while (!shouldYield() && !subscriber.isDisposed && delay === 0);
      } catch (cause) {
        subscriber.complete({ cause });
      }
      return subscriber.isDisposed ? undefined : continuationResult;
    };
    const continuationResult: SchedulerContinuationResultLike = {
      continuation,
      delay,
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};
