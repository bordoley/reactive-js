import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { SchedulerContinuation, SchedulerContinuationResult, SchedulerLike, SchedulerResourceLike } from "@reactive-js/scheduler";

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
  ): DisposableLike {
    const schedulerSubscription = this.scheduler.schedule(continuation, delay);
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

class SafeObserver<T> implements ObserverLike<T> {
  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }
  private readonly continuation: SchedulerContinuationResult;
  private error: Error | undefined;

  private isComplete = false;
  private readonly nextQueue: Array<T> = [];
  private readonly subscriber: SubscriberLike<T>;

  constructor(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;

    this.continuation = {
      continuation: this.drainQueue,
    };

    this.subscriber.add(this.clearQueue);
  }

  complete(error?: Error) {
    if (!this.isComplete) {
      this.isComplete = true;
      this.error = error;
      this.scheduleDrainQueue();
    }
  }

  next(data: T) {
    if (!this.isComplete) {
      this.nextQueue.push(data);
      this.scheduleDrainQueue();
    }
  }
  private readonly clearQueue: DisposableOrTeardown = () => {
    this.nextQueue.length = 0;
  };

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    while (this.nextQueue.length > 0) {
      const next = this.nextQueue.shift() as T;
      this.subscriber.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.remainingEvents > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.continuation;
      }
    }

    if (this.isComplete) {
      this.subscriber.remove(this.clearQueue);
      this.subscriber.complete(this.error);
    }
    return;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.subscriber.schedule(this.drainQueue);
    }
  }
}

/**
 * Returns an observer that may be safely notified from any context.
 * The underlying implementation queues notifications and notifies
 * the subscriber on it's scheduler.
 *
 * @param subscriber
 */
export const toSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
): ObserverLike<T> => new SafeObserver(subscriber);

