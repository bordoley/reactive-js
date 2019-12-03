import { ObservableLike, SubscriberLike } from "@reactive-js/rx-core";

export const throws = <T>(
  cause: unknown,
  delay?: number,
): ObservableLike<T> => {
  const error = { cause };
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const continuation = (_: () => boolean) => {
      subscriber.complete(error);
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};
