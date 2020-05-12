import { DisposableLike } from "../../disposable.ts";
import { SchedulerLike } from "../../scheduler.ts";

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
 * A function which transforms a `SubscriberLike<B>` to a `SubscriberLike<A>`.
 */
export type SubscriberOperator<A, B> = {
  readonly isSynchronous: boolean;

  (observable: SubscriberLike<B>): SubscriberLike<A>;
};

/**
 * The source of notifications which notifies a `SubscriberLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> {
  readonly isSynchronous: boolean;

  /**
   * Subscribes the `SubscriberLike` instance to the observable.
   * @param subscriber The subscriber which should be notified by the observable source.
   */
  subscribe(subscriber: SubscriberLike<T>): void;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
export type ObservableOperator<A, B> = {
  (observable: ObservableLike<A>): ObservableLike<B>;
};

/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
export type ObservablePredicate<T> = {
  (observable: ObservableLike<T>): ObservableLike<boolean>;
};

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

export interface DispatcherLike<T> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  dispatch(req: T): void;
}

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}

export interface SubjectLike<T> extends StreamLike<T, T> {}
