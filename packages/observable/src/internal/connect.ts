import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { ErrorLike, ObservableLike, SubscriberLike } from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AbstractSubscriberImpl, checkState } from "./abstractSubscriber";

const __DEV__ = process.env.NODE_ENV !== "production";

class AutoDisposingSubscriber<T> extends AbstractSubscriberImpl<T>
  implements SubscriberLike<T> {
  private _isConnected = false;

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    super(scheduler, subscription);
  }
  get isConnected() {
    return this._isConnected;
  }

  complete(_?: ErrorLike) {
    if (__DEV__) {
      checkState(this);
    }

    this.dispose();
  }

  connect() {
    this._isConnected = true;
  }

  next(_: T) {
    if (__DEV__) {
      checkState(this);
    }
  }
}

/**
 * Safely connects an ObservableLike to a SubscriberLike,
 * using the provided scheduler. The returned DisposableLike
 * may used to cancel the subscription.
 */
export const connect = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): DisposableLike => {
  const subscription = createDisposable();
  const subscriber = new AutoDisposingSubscriber(scheduler, subscription);
  observable.subscribe(subscriber);
  subscriber.connect();
  return subscription;
};
