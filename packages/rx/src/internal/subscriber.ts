import {
  DisposableLike,
  createDisposable,
  disposableMixin,
  disposed,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

export const subscriberMixin = {
  ...disposableMixin,
  schedule<T>(
    this: SubscriberLike<T> & { scheduler: SchedulerLike },
    continuation: SchedulerContinuationLike,
    delay?: number,
  ): DisposableLike {
    if (!this.isDisposed) {
      const schedulerSubscription = this.scheduler.schedule(
        continuation,
        delay,
      );
      this.add(schedulerSubscription);
      return schedulerSubscription;
    } else {
      return disposed;
    }
  }
}

/** @ignore */
export class Subscriber<T> implements SubscriberLike<T> {
  readonly add = disposableMixin.add;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = disposableMixin.dispose;
  isDisposed = false;
  readonly schedule = subscriberMixin.schedule;

  constructor(private readonly scheduler: SchedulerLike) {
    this.add(() => {
      this.isDisposed = true;
    });
  }

  get now() {
    return this.scheduler.now;
  }

  notifyNext(_: T): void {}
}

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export abstract class DelegatingSubscriber<TA, TB> implements SubscriberLike<TA> {
  readonly add = disposableMixin.add;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = disposableMixin.dispose;
  isDisposed = false;
  readonly schedule = subscriberMixin.schedule;
  readonly scheduler: SchedulerLike;

  constructor(readonly delegate: SubscriberLike<TB>) {
    this.scheduler = (delegate as any).scheduler || delegate;

    this.add(() => {
      this.isDisposed = true;
    });
    this.delegate.add(this);
  }

  get now() {
    return this.scheduler.now;
  }

  abstract notifyNext(_: TA): void;
}