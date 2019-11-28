import { ObservableLike } from "@reactive-js/rx-observable";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

export const throws = <T>(
  error: Error,
  config?: {
    delay?: number;
    priority?: number;
  },
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const continuation = (_: () => boolean) => {
      subscriber.complete(error);
    };

    subscriber.schedule(continuation, config);
  };

  return { subscribe };
};
