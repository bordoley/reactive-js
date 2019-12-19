import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

export const fromIterable = <T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const iterator: Iterator<T> = iterable[Symbol.iterator]();

    subscriber.add(() => {
      if (iterator.return !== undefined) {
        iterator.return();
      }
    });

    const continuation: SchedulerContinuationLike = shouldYield => {
      let error = undefined;

      try {
        for (
          let next = iterator.next();
          !next.done && !subscriber.isCompleted;
          next = iterator.next()
        ) {
          subscriber.nextUnsafe(next.value);

          if (shouldYield() || delay !== 0) {
            return continuationResult;
          }
        }
      } catch (cause) {
        error = { cause };
      }

      subscriber.complete(error);
      return;
    };
    const continuationResult: SchedulerContinuationResultLike = {
      continuation,
      delay,
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};
