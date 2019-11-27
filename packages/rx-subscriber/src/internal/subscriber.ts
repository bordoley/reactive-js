import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import {
  SchedulerContinuation,
  SchedulerLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

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
 * A SubscriberLike that can have it's connected state set.
 *
 * @noInheritDoc
 * */
export interface ConnectableSubscriberLike<T> extends SubscriberLike<T> {
  /**
   * Set the connected state of the subscriber to true.
   */
  connect(): void;
}

/**
 * A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.
 */
export interface SubscriberOperator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

/** @ignore */
export abstract class AbstractSubscriberImpl<T> implements SubscriberLike<T> {
  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  abstract get isConnected(): boolean;

  get isDisposed() {
    return this.subscription.isDisposed;
  }

  get now() {
    return this.scheduler.now;
  }
  readonly scheduler: SchedulerLike;
  readonly subscription: DisposableLike;

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    this.scheduler = scheduler;
    this.subscription = subscription;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.add(disposable, ...disposables);
  }
  abstract complete(_error?: Error): void;

  dispose() {
    this.subscription.dispose();
  }
  abstract next(data: T): void;

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.remove(disposable, ...disposables);
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
    priority?: number,
  ): DisposableLike {
    const schedulerSubscription = this.scheduler.schedule(
      continuation,
      delay,
      priority,
    );
    this.add(schedulerSubscription);
    schedulerSubscription.add(() => this.remove(schedulerSubscription));
    return schedulerSubscription;
  }
}

/** @ignore */
export const checkState = <T>(subscriber: SubscriberLike<T>) => {
  if (!subscriber.inScheduledContinuation) {
    throw new Error(
      "Attempted to notify subscriber from outside of it's scheduler",
    );
  } else if (!subscriber.isConnected) {
    throw new Error("Attempted to notify subscriber before it is connected");
  }
};
