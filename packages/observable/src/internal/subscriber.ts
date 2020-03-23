import { add, createDisposable, dispose } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

/**
 * Abstract base class for implementing the `SubscriberLike` interface.
 *
 * @ignore
 */
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly add = add;
  readonly disposable = createDisposable(_ => {
    this.isDisposed = true;
  });
  readonly dispose = dispose;
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
  ) {
    this.add(continuation);
    this.scheduler.schedule(continuation);
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
