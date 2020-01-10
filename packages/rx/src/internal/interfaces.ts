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
 * The underlying mechanism for receiving and transforming notifications from an Observable source.
 * The SubscriberLike interface composes Scheduler and isposable subscription. In general,
 *
 * @noInheritDoc
 */
export interface SubscriberLike<T> extends DisposableLike, SchedulerLike {
  notify(next: T): void;
}

export interface SafeSubscriberLike<T> extends DisposableLike, SchedulerLike {
  notifySafe(next: T): void;
}

/**
 * A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.
 */
export interface SubscriberOperatorLike<A, B> {
  readonly isSynchronous: boolean;
  call(subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

/**
 * The source of notifications which may be observed by a SubscriberLike instance.
 */
export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
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
  extends SubscriberLike<T>,
    MulticastObservableResourceLike<T> {}

/** @noInheritDoc */
export interface EnumeratorLike<T> extends DisposableLike {
  readonly current: T;
  readonly hasCurrent: boolean;

  moveNext(): boolean;
}

/** @noInheritDoc */
export interface EnumerableLike<T> extends ObservableLike<T>, Iterable<T> {
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
