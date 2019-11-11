import {
  Notifications,
  ObservableLike,
  SchedulerLike,
  SchedulerContinuation,
} from "@rx-min/rx-core";

import { create } from "./create";

export const throws = <T>(
  error: Error,
  delay: number | void,
): ObservableLike<T> =>
  create(subscriber => {
    const continuation: SchedulerContinuation = _shouldYield => {
      subscriber.notify(Notifications.complete, error);
    };

    subscriber.subscription.add(
      subscriber.scheduler.schedule(continuation, delay),
    );
  });
