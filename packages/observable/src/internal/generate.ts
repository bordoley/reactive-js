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
      do {
        subscriber.nextUnsafe(acc);
        try {
          acc = generator(acc);
        } catch (cause) {
          subscriber.complete({ cause });
        }
      } while (!shouldYield() && !subscriber.isCompleted && delay === 0);
    
      return subscriber.isCompleted
        ? undefined
        : continuationResult;
    };
    const continuationResult: SchedulerContinuationResultLike = {
      continuation,
      delay,
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};
