import { DisposableLike } from "@reactive-js/disposable";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { toSafeSubscriber } from "./toSafeSubscriber";

class CreateObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly onSubscribe: (notify: (next: T) => void) => DisposableLike,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.

    const safeSubscriber = toSafeSubscriber(subscriber);
    const notify = (next: T) => safeSubscriber.notify(next);

    try {
      const onSubscribeSubscription = this.onSubscribe(notify);
      safeSubscriber.add(onSubscribeSubscription);
      onSubscribeSubscription.add(safeSubscriber);
    } catch (cause) {
      safeSubscriber.dispose({ cause });
    }
  }
}

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
  onSubscribe: (notify: (next: T) => void) => DisposableLike,
): ObservableLike<T> => new CreateObservable(onSubscribe);
