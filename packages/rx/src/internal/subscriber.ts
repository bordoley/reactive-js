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

/** @ignore */
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly add = disposableMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = disposableMixin.dispose;
  isDisposed = false;
  readonly scheduler: SchedulerLike;

  constructor(scheduler: SchedulerLike) {
    this.scheduler = (scheduler as any).scheduler || scheduler;
    this.add(_ => {
      this.isDisposed = true;
    });
  }

  get now() {
    return this.scheduler.now;
  }

  abstract notify(_: T): void;

  schedule<T>(
    this: SubscriberLike<T> & { scheduler: SchedulerLike },
    continuation: SchedulerContinuationLike,
  ): DisposableLike {
    const schedulerSubscription = this.scheduler.schedule(
      continuation,
    );
    this.add(schedulerSubscription);
    return schedulerSubscription;
  }
}

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<TA, TB>
  extends AbstractSubscriber<TA>{

  constructor(readonly delegate: SubscriberLike<TB>) {
    super(delegate);
    this.delegate.add(this);
  }

  abstract notify(_: TA): void;
}
