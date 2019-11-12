import {
  Notifications,
  Observable,
  ObservableLike,
  SchedulerContinuation,
} from "@rx-min/rx-core";

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
