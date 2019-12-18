import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { ErrorLike, SubscriberLike } from "./interfaces";

/** @ignore */
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly scheduler: SchedulerLike;
  readonly disposable: DisposableLike;

  constructor(scheduler: SchedulerLike, disposable: DisposableLike) {
    this.scheduler = scheduler;
    this.disposable = disposable;
  }

  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  abstract get isCompleted(): boolean;

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  abstract get isSubscribed(): boolean;

  get now() {
    return this.scheduler.now;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  abstract complete(_error?: ErrorLike): void;

  dispose() {
    this.disposable.dispose();
  }

  abstract next(data: T): void;
  
  abstract nextUnsafe(data: T): void;

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
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
