import {
  Notifications,
  Observable,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

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
      if (subscriber.subscription.isDisposed) {
        return;
      } else if (delay > 0) {
        acc = generator(acc);
        subscriber.notify(Notifications.next, acc);
        return continuationResult;
      } else {
        while (true) {
          acc = generator(acc);
          subscriber.notify(Notifications.next, acc);

          if (shouldYield()) {
            return continuationResult;
          }
        }

        subscriber.notify(Notifications.complete);
      }
    };

    continuationResult = delay > 0 ? [continuation, delay] : continuation;

    subscriber.subscription.add(
      subscriber.scheduler.schedule(
        continuation,
        delay > 0 ? delay : undefined,
      ),
    );
  };

  return { subscribe };
};
