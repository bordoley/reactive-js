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
      let next = iterator.next();
      if (subscriber.isDisposed) {
        return;
      } else if (next.done) {
        subscriber.complete();
        return;
      } else if (delay > 0) {
        subscriber.next(next.value);
        return continuationResult;
      } else {
        for (; !next.done && !subscriber.isDisposed; next = iterator.next()) {
          subscriber.next(next.value);

          if (shouldYield()) {
            return continuationResult;
          }
        }

        subscriber.complete();
        return;
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
