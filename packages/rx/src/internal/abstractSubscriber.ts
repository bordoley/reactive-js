import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { ErrorLike, SubscriberLike } from "./interfaces";

/** @ignore */
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly scheduler: SchedulerLike;
  readonly subscription: DisposableLike;
  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    this.scheduler = scheduler;
    this.subscription = subscription;
  }

  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  abstract get isSubscribed(): boolean;

  get isDisposed() {
    return this.subscription.isDisposed;
  }

  get now() {
    return this.scheduler.now;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.add(disposable, ...disposables);
    return this;
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
    return this;
  }

  schedule(
    continuation: SchedulerContinuationLike,
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
  } else if (!subscriber.isSubscribed) {
    throw new Error("Attempted to notify subscriber before it is subscribeed");
  }
};
