import {
  DisposableLike,
  DisposableOrTeardown,
  createDisposable,
  disposed,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { ErrorLike, SubscriberLike } from "./interfaces";

/** @ignore */
export class Subscriber<T> implements SubscriberLike<T> {
  private readonly disposable: DisposableLike = createDisposable();
  isDisposed = false;

  constructor(private readonly scheduler: SchedulerLike) {
    this.disposable.add(() => {
      this.isDisposed = true;
    });
  }

  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

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

  complete(_?: ErrorLike) {
    this.dispose();
  }

  dispose() {
    this.disposable.dispose();
  }

  next(_: T): void {}

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
    if(!this.isDisposed) {
      const schedulerSubscription = this.scheduler.schedule(continuation, delay);
      this.add(schedulerSubscription);
      schedulerSubscription.add(() => this.remove(schedulerSubscription));
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
export class DelegatingSubscriber<
  TA,
  TB
> extends Subscriber<TA> {
  constructor(readonly delegate: SubscriberLike<TB>) {
    super((delegate as any).scheduler || delegate);

    this.delegate.add(this);
    this.add(() => {
      this.delegate.remove(this);
    });
  }

  complete(error?: ErrorLike) {
    this.delegate.complete(error);
  }
}
