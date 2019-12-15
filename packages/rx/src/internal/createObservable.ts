import { DisposableOrTeardown } from "@reactive-js/disposable";
import { ObservableLike, ObserverLike, SubscriberLike } from "./interfaces";
import { createSafeObserver } from "./safeObserver";

/**
 * Factory for safely creating new ObservableLikes. The onSubscribe function
 * is called with an observer which may be notified from any context,
 * queueing notifications for notification on the underlying SubscriberLike's
 * scheduler. The onSubscribe function may return a DisposableOrTeardown instance
 * which will be disposed when the underlying subscription is disposed.
 *
 * Note, implementations should not do significant blocking work in
 * the onSubscribe function.
 *
 * @param onSubscribe
 */
export const createObservable = <T>(
  onSubscribe: (observer: ObserverLike<T>) => DisposableOrTeardown | void,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const observer = createSafeObserver(subscriber);

    try {
      const onSubscribeSubscription = onSubscribe(observer) || undefined;
      if (onSubscribeSubscription !== undefined) {
        subscriber.add(onSubscribeSubscription);
      }
    } catch (cause) {
      observer.complete({ cause });
    }
  };

  return { subscribe };
};
