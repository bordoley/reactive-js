import {
  DisposableLike,
  DisposableOrTeardown,
  createDisposable,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { ErrorLike, SubscriberLike } from "./interfaces";

/** @ignore */
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly disposable: DisposableLike = createDisposable();
  isDisposed = false;

  constructor(readonly scheduler: SchedulerLike) {
    this.disposable.add(() => { this.isDisposed = true });
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

  abstract complete(error?: ErrorLike): void;

  dispose() {
    this.disposable.dispose();
  }

  abstract next(data: T): void;

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
    const schedulerSubscription = this.scheduler.schedule(continuation, delay);
    this.add(schedulerSubscription);
    schedulerSubscription.add(() => this.remove(schedulerSubscription));
    return schedulerSubscription;
  }
}

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<
  TA,
  TB
> extends AbstractSubscriber<TA> {
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
