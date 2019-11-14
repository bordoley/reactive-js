import {
  Notifications,
  Observable,
  ObservableLike,
} from "@reactive-js/rx-core";

import { SchedulerContinuation } from "@reactive-js/scheduler";

export const throws = <T>(
  error: Error,
  delay: number | void,
): ObservableLike<T> =>
  Observable.create(subscriber => {
    const continuation: SchedulerContinuation = _shouldYield => {
      subscriber.notify(Notifications.complete, error);
    };

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay),
    );
  });
