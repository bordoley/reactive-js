import {
  DisposableLike,
  createDisposable,
  disposableMixin,
  disposed,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import {  SubscriberLike } from "./interfaces";

/** @ignore */
export class Subscriber<T> implements SubscriberLike<T> {
  readonly add = disposableMixin.add;
  readonly disposable: DisposableLike = createDisposable();
  isDisposed = false;

  constructor(private readonly scheduler: SchedulerLike) {
    this.add(() => { 
      this.isDisposed = true;
    })
  }

  get now() {
    return this.scheduler.now;
  }

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.disposable.dispose(error);
    }
  }

  next(_: T): void {}

  schedule(
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

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export class DelegatingSubscriber<TA, TB> extends Subscriber<TA> {
  constructor(readonly delegate: SubscriberLike<TB>) {
    super((delegate as any).scheduler || delegate);

    this.delegate.add(this);
  }

  /** @ignore */
  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.disposable.dispose(error);
      this.delegate.dispose(error);
    }
  }
}
