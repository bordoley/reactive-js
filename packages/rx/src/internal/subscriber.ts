import {
  DisposableLike,
  createDisposable,
  disposableMixin,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

/**
 * Abstract base class for implementing the `SubscriberLike` interface.
 *
 * @noInheritDoc
 */
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly add = disposableMixin.add;
  readonly disposable = createDisposable(_ => {
    this.isDisposed = true;
  });
  readonly dispose = disposableMixin.dispose;
  isDisposed = false;
  private readonly scheduler: SchedulerLike;

  constructor(scheduler: SchedulerLike) {
    this.scheduler = (scheduler as any).scheduler || scheduler;
  }

  get now() {
    return this.scheduler.now;
  }

  abstract notify(_: T): void;

  schedule<T>(
    this: SubscriberLike<T> & { scheduler: SchedulerLike },
    continuation: SchedulerContinuationLike,
  ): DisposableLike {
    const schedulerSubscription = this.scheduler.schedule(continuation);
    this.add(schedulerSubscription);
    return schedulerSubscription;
  }
}

/**
 * Abstract base class for implementing instances of the `SubscriberLike` interface
 * which delegate notifications to a parent `SubscriberLike` instance
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<
  TA,
  TB
> extends AbstractSubscriber<TA> {
  constructor(readonly delegate: SubscriberLike<TB>) {
    super(delegate);
    delegate.add(this);
  }
}
