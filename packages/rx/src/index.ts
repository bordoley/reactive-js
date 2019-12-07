import { DisposableLike } from "@reactive-js/disposable";
import { SchedulerResourceLike } from "@reactive-js/scheduler";

/**
 * A wrapper around a caught error to handle wierd corner cases like
 * a function which throws undefined or a string.
 */
export interface ErrorLike {
  readonly cause: unknown;
}

/**
 * An observer of push-based notifications.
 */
export interface ObserverLike<T> {
  /**
   * Called by a provider to indicate that it is done sending push-based notifications.
   *
   * @param error If present, indicates that the provider experienced an error condition.
   */
  complete(error?: ErrorLike): void;

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
 * A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.
 */
export interface SubscriberOperator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

/**
 * The source of notifications which may be observed by a SubscriberLike instance.
 */
export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B> */
export interface ObservableOperator<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}

/** @noInheritDoc */
export interface ObservableResourceLike<T>
  extends ObservableLike<T>,
    DisposableLike {}

export interface ObservableResourceOperator<A, B> {
  (observable: ObservableResourceLike<A>): ObservableResourceLike<B>;
}

/** @noInheritDoc */
export interface SubjectLike<T> extends ObserverLike<T>, ObservableLike<T> {}

/** @noInheritDoc */
export interface SubjectResourceLike<T>
  extends SubjectLike<T>,
    ObservableResourceLike<T> {}

