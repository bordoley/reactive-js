import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ErrorLike, ObservableLike, SubscriberLike } from "./interfaces";
import { AbstractSubscriber, checkState } from "./abstractSubscriber";

const __DEV__ = process.env.NODE_ENV !== "production";

class AutoDisposingSubscriber<T> extends AbstractSubscriber<T>
  implements SubscriberLike<T> {
  isSubscribed = false;

  constructor(scheduler: SchedulerLike, disposable: DisposableLike) {
    super(scheduler, disposable);
  }

  get isCompleted() {
    return this.disposable.isDisposed;
  }

  complete(_?: ErrorLike) {
    if (__DEV__) {
      checkState(this);
    }

    this.dispose();
  }

  next(_: T) {
    if (__DEV__) {
      checkState(this);
    }
  }

  nextUnsafe(_: T) {}
}

/**
 * Safely subscribes an ObservableLike to a SubscriberLike,
 * using the provided scheduler. The returned DisposableLike
 * may used to cancel the subscription.
 */
export const subscribe = <T>(
  scheduler: SchedulerLike,
): OperatorLike<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const subscription = createDisposable();
  const subscriber = new AutoDisposingSubscriber(scheduler, subscription);
  observable.subscribe(subscriber);
  subscriber.isSubscribed = true;
  return subscription;
};
