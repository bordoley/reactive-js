import { ObservableLike } from "@reactive-js/rx-observable";
import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { SchedulerOptions } from "@reactive-js/scheduler";

export const throws = <T>(
  error: Error,
  options?: SchedulerOptions,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const continuation = (_: () => boolean) => {
      subscriber.complete(error);
    };

    subscriber.schedule(continuation, options);
  };

  return { subscribe };
};
