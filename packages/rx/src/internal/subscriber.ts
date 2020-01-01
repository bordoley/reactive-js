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
  readonly disposable: DisposableLike = createDisposable();
  
  readonly add = disposableMixin.add;
  isDisposed = false;
  readonly remove = disposableMixin.remove;

  constructor(private readonly scheduler: SchedulerLike) {}

  get now() {
    return this.scheduler.now;
  }

  complete(_?: ErrorLike) {
    this.dispose();
  }

  dispose() {
    const isDisposed = this.isDisposed;
    if (!isDisposed) {
      this.isDisposed = true;
      this.disposable.dispose();
    }
    return !isDisposed;
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

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose();
      this.delegate.complete(error);
    }
  }
}
