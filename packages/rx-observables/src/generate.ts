import {
  Notifications,
  Observable,
  ObservableLike,
} from "@rx-min/rx-core";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@rx-min/scheduler";

const alwaysFalse = () => false;

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: T,
  delay: number | void,
): ObservableLike<T> =>
  Observable.create(subscriber => {
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

    continuationResult =
      delay !== undefined ? [continuation, delay] : continuation;

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay),
    );
  });
