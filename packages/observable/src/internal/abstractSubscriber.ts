import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import { ErrorLike, SubscriberLike } from "@reactive-js/rx";
import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";

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
  abstract complete(_error?: ErrorLike): void;

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
