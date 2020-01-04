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
import { ErrorLike, SubscriberLike } from "./interfaces";

/** @ignore */
export class Subscriber<T> implements SubscriberLike<T> {
  readonly add = disposableMixin.add;
  readonly disposable: DisposableLike = createDisposable();
  isDisposed = false;

  constructor(private readonly scheduler: SchedulerLike) {}

  get now() {
    return this.scheduler.now;
  }

  complete(error?: ErrorLike) {
    this.dispose(error);
  }

  dispose(error?: ErrorLike) {
    const isDisposed = this.isDisposed;
    if (!isDisposed) {
      this.isDisposed = true;
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
  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose(error);
      this.delegate.complete(error);
    }
  }
}
