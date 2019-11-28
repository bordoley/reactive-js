import { DisposableOrTeardown } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { toSafeObserver, SubscriberLike } from "@reactive-js/rx-subscriber";
import { ObservableLike } from "./observable";

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
export const create = <T>(
  onSubscribe: (observer: ObserverLike<T>) => DisposableOrTeardown | void,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    // The idea here is that an onSubscribe function may
    // call onNext from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const observer = toSafeObserver(subscriber);

    try {
      const onSubscribeSubscription = onSubscribe(observer);
      if (onSubscribeSubscription !== undefined) {
        subscriber.add(onSubscribeSubscription);
      }
    } catch (error) {
      observer.complete(error);
    }
  };

  return { subscribe };
};

