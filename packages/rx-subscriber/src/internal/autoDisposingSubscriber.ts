import { DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  AbstractSubscriberImpl,
  checkState,
  ConnectableSubscriberLike,
} from "./subscriber";

const __DEV__ = process.env.NODE_ENV !== "production";

class AutoDisposingSubscriberImpl<T> extends AbstractSubscriberImpl<T>
  implements ConnectableSubscriberLike<T> {
  private _isConnected = false;

  get isConnected() {
    return this._isConnected;
  }

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    super(scheduler, subscription);
  }

  complete(_error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    this.dispose();
  }

  connect() {
    this._isConnected = true;
  }

  next(data: T) {
    if (__DEV__) {
      checkState(this);
    }
  }
}

/**
 * Returns a new subscriber which disposes it's underlying subscription when completed.
 *
 * @param scheduler
 * @param subscription
 */
export const createAutoDisposing = <T>(
  scheduler: SchedulerLike,
  subscription: DisposableLike,
): ConnectableSubscriberLike<T> =>
  new AutoDisposingSubscriberImpl(scheduler, subscription);
