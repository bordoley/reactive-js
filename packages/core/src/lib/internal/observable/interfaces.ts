import { DisposableLike } from "../../disposable";
import { SchedulerLike } from "../../scheduler";

/**
 * The underlying mechanism for receiving and transforming notifications from an
 * observable source. The `ObserverLike` interface composes the `SchedulerLike` and
 * `DisposableLike` interfaces into a single unified type, while adding the capability
 * to receive notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T> extends DisposableLike, SchedulerLike {
  /**
   * Notifies the the observer of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the observer's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(next: T): void;
}

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
export type ObserverOperator<A, B> = {
  readonly isSynchronous: boolean;

  (observer: ObserverLike<B>): ObserverLike<A>;
};

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> {
  readonly isSynchronous: boolean;

  /**
   * Subscribes the `ObserverLike` instance to the observable.
   * @param observer The observer which should be notified by the observable source.
   */
  observe(observer: ObserverLike<T>): void;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
export type ObservableOperator<A, B> = {
  (observable: ObservableLike<A>): ObservableLike<B>;
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
   * The number of observers currently observing.
   */
  readonly observerCount: number;
}

/** @noInheritDoc */
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

/** @noInheritDoc */
export interface SubjectLike<T> extends StreamLike<T, T> {}
