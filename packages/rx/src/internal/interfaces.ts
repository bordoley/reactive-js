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
  onComplete(error?: ErrorLike): void;

  /**
   * Provides the next item to observe.
   *
   * @param data
   */
  onNext(data: T): void;
}

/**
 * A SubscriberLike represents the underlying mechanism for receiving notifications from
 * an ObservableLike. A SubscriberLike composes an observer with a
 * scheduler and disposable subscription. Subscribers may only be notified
 * after they have been subscribeed and must be notified from a SchedulerContinuation
 * executing on the subscriber's scheduler.
 *
 * @noInheritDoc
 */
export interface SubscriberLike<T> extends SchedulerResourceLike {
  complete(error?: ErrorLike): void;
  next(data: T): void;
}

/**
 * A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.
 */
export interface SubscriberOperatorLike<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

/**
 * The source of notifications which may be observed by a SubscriberLike instance.
 */
export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B> */
export interface ObservableOperatorLike<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}

/** @noInheritDoc */
export interface ObservableResourceLike<T>
  extends ObservableLike<T>,
    DisposableLike {}

/** @noInheritDoc */
export interface MulticastObservableLike<T> extends ObservableLike<T> {
  readonly subscriberCount: number;
}

/** @noInheritDoc */
export interface MulticastObservableResourceLike<T>
  extends MulticastObservableLike<T>,
    ObservableResourceLike<T> {}

/** @noInheritDoc */
export interface SubjectLike<T>
  extends ObserverLike<T>,
    MulticastObservableLike<T> {}

/** @noInheritDoc */
export interface SubjectResourceLike<T>
  extends SubjectLike<T>,
    MulticastObservableResourceLike<T> {}
