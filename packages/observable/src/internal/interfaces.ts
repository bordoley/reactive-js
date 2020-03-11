import { DisposableLike, ErrorLike } from "@reactive-js/disposable";
import { EnumerableLike } from "@reactive-js/enumerable";
import { SchedulerLike } from "@reactive-js/scheduler";

/**
 * An observer of push-based notifications within an observable source.
 */
export interface ObserverLike<T> {
  /**
   * Notifies the observer that the provider has finished sending push-based notifications.
   *
   * @param error If present, indicates that the provider experienced an error condition.
   */
  onDispose(error?: ErrorLike): void;

  /**
   * Provides the observer with the next item to observe.
   *
   * @param data
   */
  onNotify(next: T): void;
}

/**
 * The underlying mechanism for receiving and transforming notifications from an
 * observable source. The `SubscriberLike` interface composes the `SchedulerLike` and
 * `DisposableLike` interfaces into a single unified type, while adding the capability
 * to receive notifications.
 *
 * @noInheritDoc
 */
export interface SubscriberLike<T> extends DisposableLike, SchedulerLike {
  /**
   * Notifies the the subscriber of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the subscriber's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(next: T): void;
}

/**
 * A variant of the `SubscriberLike` interface that can be used to safely notify
 * a backing subscriber from any context.
 *
 * @noInheritDoc
 */
export interface SafeSubscriberLike<T> extends SubscriberLike<T> {
  /**
   * Notifies the the subscriber of the next notification produced by the observable source.
   *
   * Notifications are queued and scheduled to be dispatched to the underlying subscriber
   * on a `SchedulerContinuationLike` run on the underlying subscriber's `schedule` method.
   * Hence, it is safe to call `notifyNext` from any context.
   *
   * @param next The next notification value.
   */
  dispatch(next: T): void;
}

/**
 * The source of notifications which notifies a `SubscriberLike` instance.
 * 
 * @noInheritDoc
 */
export interface ObservableLike<T> extends EnumerableLike<void, T> {
  readonly isSynchronous: boolean;

  /**
   * Subscribes the `SubscriberLike` instance to the observable.
   * @param subscriber The subscriber which should be notified by the observable source.
   */
  subscribe(subscriber: SubscriberLike<T>): void;
}

/**
 * An `ObservableLike` that shares a common subscription to an underlying observable source.
 *
 * @noInheritDoc
 */
export interface MulticastObservableLike<T>
  extends ObservableLike<T>,
    DisposableLike {
  /**
   * The number of subscribers currently subscribed.
   */
  readonly subscriberCount: number;
}

/**
 * A `MulticastObservableLike` that is also `SubscriberLike`.
 *
 * @noInheritDoc
 */
export interface SubjectLike<T>
  extends SubscriberLike<T>,
    MulticastObservableLike<T> {}

/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
export interface ObservableOperatorLike<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}

/**
 * A function which transforms a `SubscriberLike<B>` to a `SubscriberLike<A>`.
 */
export interface SubscriberOperatorLike<A, B> {
  (observable: SubscriberLike<B>): SubscriberLike<A>;
}
