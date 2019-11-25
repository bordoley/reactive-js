import {
  create as observableCreate,
  ObservableLike,
} from "@reactive-js/rx-observable";

import { ObserverLike } from "@reactive-js/rx-observer";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

const throwWithDelay = <T>(
  error: Error,
  delay: number,
  priority?: number,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const continuation = (_: () => boolean) => {
      subscriber.complete(error);
    };

    subscriber.schedule(continuation, delay, priority);
  };

  return { subscribe };
};

export const throws = <T>(
  error: Error,
  delay?: number,
  priority?: number,
): ObservableLike<T> =>
  delay !== undefined
    ? throwWithDelay(error, delay, priority)
    : observableCreate((observer: ObserverLike<T>) => {
        observer.complete(error);
      }, priority);
