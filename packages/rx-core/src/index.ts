import { DisposableLike } from "@reactive-js/disposable";
import { SchedulerResourceLike } from "@reactive-js/scheduler";

/**
 * An observer of push-based notifications.
 */
export interface ObserverLike<T> {
  /**
   * Called by a provider to indicate that it is done sending push-based notifications.
   *
   * @param error If present, indicates that the provider experienced an error condition.
   */
  complete(error?: Error): void;

  /**
   * Provides the next item to observe.
   *
   * @param data
   */
  next(data: T): void;
}

/**
 * A SubscriberLike represents the underlying mechanism for receiving notifications from
 * an ObservableLike. A SubscriberLike composes an observer with a
 * scheduler and disposable subscription. Subscribers may only be notified
 * after they have been connected and must be notified from a SchedulerContinuation
 * executing on the subscriber's scheduler. Not doing so is a runtime error and will
 * result in errors being throw in DEV mode (these checks are disabled in production mode
 * for performance reasons).
 *
 * @noInheritDoc
 */
export interface SubscriberLike<T>
  extends ObserverLike<T>,
    DisposableLike,
    SchedulerResourceLike {
  /** Returns true if the subscriber is connected. */
  readonly isConnected: boolean;
}

/**
 * The source of notifications which may be observed by a SubscriberLike instance.
 */
export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

export interface ObservableResourceLike<T>
  extends ObservableLike<T>,
    DisposableLike {}