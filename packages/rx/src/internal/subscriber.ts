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

/** @ignore */
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
  readonly add = subscriberMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = subscriberMixin.dispose;
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

  notify(_: T): void {}
}

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<TA, TB> implements SubscriberLike<TA> {
  /** @ignore */
  readonly add = subscriberMixin.add;
  /** @ignore */
  readonly disposable = createDisposable();
  /** @ignore */
  readonly dispose = subscriberMixin.dispose;
  /** @ignore */
  isDisposed = false;
  /** @ignore */
  readonly schedule = subscriberMixin.schedule;
  /** @ignore */
  readonly scheduler: SchedulerLike;

  constructor(readonly delegate: SubscriberLike<TB>) {
    this.scheduler = (delegate as any).scheduler || delegate;

    this.add(() => {
      this.isDisposed = true;
    });
    this.delegate.add(this);
  }

  /** @ignore */
  get now() {
    return this.scheduler.now;
  }

  abstract notify(_: TA): void;
}