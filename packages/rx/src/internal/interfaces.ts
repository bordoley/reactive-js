import { DisposableLike, ErrorLike } from "@reactive-js/disposable";
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
export interface SafeSubscriberLike<T> extends DisposableLike, SchedulerLike {
  /**
   * Notifies the the subscriber of the next notification produced by the observable source.
   *
   * Notifications are queued and scheduled to be dispatched to the underlying subscriber
   * on a `SchedulerContinuationLike` run on the underlying subscriber's `schedule` method.
   * Hence, it is safe to call `notifyNext` from any context.
   *
   * @param next The next notification value.
   */
  notifySafe(next: T): void;
}

/**
 * A function which transforms a `SubscriberLike<B>` to a `SubscriberLike<A>`.
 */
export interface SubscriberOperatorLike<A, B> {
  /**
   * Flag that indicates that the transformed `SubscriberLike` synchronously
   * transforms notifications, without introducing delays.
   */
  readonly isSynchronous: boolean;

  /**
   * Transforms the `SubscriberLike<B>` to a `SubscriberLike<A>`.
   * @param subscriber The subscriber to transform.
   */
  call(subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

/**
 * The source of notifications which notifies a `SubscriberLike` instance.
 */
export interface ObservableLike<T> {
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

/**
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<T> extends DisposableLike {
  /**
   * The current item, if present, at the current position of the enumerator.
   */
  readonly current: T;

  /**
   * `true` if the current the enumerator has a current value, otherwise `false`.
   */
  readonly hasCurrent: boolean;

  /**
   * Advances the enumerator to the next item.
   *
   * @returns `true` if the enumerator was successfully advanced to the next item, otherwise `false`.
   */
  moveNext(): boolean;
}

/**
 * An `ObservableLike` that also support synchronous enumeration and iteration.
 *
 * @noInheritDoc
 */
export interface EnumerableLike<T> extends ObservableLike<T>, Iterable<T> {
  /**
   * Returns an `EnumeratorLike` to iterate through the observable source.
   */
  enumerate(): EnumeratorLike<T>;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B> */
export interface ObservableOperatorLike<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}

/** A function which converts an EnumerableLike<A> to an EnumerableLike<B> */
export interface EnumerableOperatorLike<A, B> {
  (enumerable: EnumerableLike<A>): EnumerableLike<B>;
}
