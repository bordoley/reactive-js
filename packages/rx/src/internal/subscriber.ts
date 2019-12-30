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
  isDisposed = false;

  add = disposableMixin.add;
remove = disposableMixin.remove;
constructor(private readonly scheduler: SchedulerLike) {}

  get now() {
    return this.scheduler.now;
  }

  

  
complete(_?: ErrorLike) {
    this.dispose();
  }

  dispose() {
    if (!this.isDisposed) {
      this.isDisposed = true;
      this.disposable.dispose();
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

  complete(error?: ErrorLike) {
    this.dispose();
    this.delegate.complete(error);
  }
}
