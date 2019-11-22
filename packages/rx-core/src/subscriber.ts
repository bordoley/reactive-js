import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposables";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
  SchedulerLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import { ObserverLike } from "./observer";

export interface SubscriberLike<T>
  extends ObserverLike<T>,
    DisposableLike,
    SchedulerResourceLike {
  readonly isConnected: boolean;
}

export interface ConnectableSubscriberLike<T> extends SubscriberLike<T> {
  isConnected: boolean;
}

export interface Operator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

const checkState = <T>(subscriber: SubscriberLike<T>) => {
  if (!subscriber.inScheduledContinuation) {
    throw new Error(
      "Attempted to notify subscriber from outside of it's scheduler",
    );
  } else if (!subscriber.isConnected) {
    throw new Error("Attempted to notify subscriber before it is connected");
  }
};

const __DEV__ = process.env.NODE_ENV !== "production";

abstract class AbstractSubjectImpl<T> implements SubscriberLike<T> {
  readonly scheduler: SchedulerLike;
  readonly subscription: DisposableLike;

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    this.scheduler = scheduler;
    this.subscription = subscription;
  }

  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  get isDisposed() {
    return this.subscription.isDisposed;
  }

  get now() {
    return this.scheduler.now;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.add.apply(this.subscription, [
      disposable,
      ...disposables,
    ]);
  }

  dispose() {
    this.subscription.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.remove.apply(this.subscription, [
      disposable,
      ...disposables,
    ]);
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
    priority?: number,
  ): DisposableLike {
    const schedulerSubscription = this.scheduler.schedule(
      continuation,
      delay,
      priority,
    );
    this.add(schedulerSubscription);
    schedulerSubscription.add(() => this.remove(schedulerSubscription));
    return schedulerSubscription;
  }

  abstract get isConnected(): boolean;
  abstract complete(_error?: Error): void;
  abstract next(data: T): void;
}

class AutoDisposingSubscriberImpl<T> extends AbstractSubjectImpl<T>
  implements ConnectableSubscriberLike<T> {
  isConnected = false;

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    super(scheduler, subscription);
  }

  complete(_error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    this.dispose();
  }

  next(data: T) {
    if (__DEV__) {
      checkState(this);
    }
  }
}

export const AutoDisposingSubscriber = {
  create: <T>(
    scheduler: SchedulerLike,
    subscription: DisposableLike,
  ): ConnectableSubscriberLike<T> =>
    new AutoDisposingSubscriberImpl(scheduler, subscription),
};

const getSubscriberScheduler = <T>(
  delegate: SubscriberLike<T>,
): SchedulerLike =>
  delegate instanceof DelegatingSubscriber
    ? delegate.scheduler
    : delegate instanceof AutoDisposingSubscriberImpl
    ? delegate.scheduler
    : delegate;

const getSubscriberSubscription = <T>(
  delegate: SubscriberLike<T>,
): DisposableLike =>
  delegate instanceof DelegatingSubscriber
    ? delegate.subscription
    : delegate instanceof AutoDisposingSubscriberImpl
    ? delegate.subscription
    : delegate;

export abstract class DelegatingSubscriber<TA, TB> extends AbstractSubjectImpl<
  TA
> {
  private readonly source: SubscriberLike<any>;
  readonly delegate: ObserverLike<TB>;

  private isStopped = false;

  constructor(delegate: SubscriberLike<TB>) {
    super(
      getSubscriberScheduler(delegate),
      getSubscriberSubscription(delegate),
    );

    this.delegate = delegate;

    this.source =
      delegate instanceof DelegatingSubscriber ? delegate.source : delegate;

    this.add(() => {
      this.isStopped = true;
    });
  }

  get isConnected() {
    return this.source.isConnected;
  }

  protected abstract onNext(data: TA): void;

  protected abstract onComplete(error?: Error): void;

  private tryOnNext(data: TA) {
    try {
      this.onNext(data);
    } catch (e) {
      this.complete(e);
    }
  }

  private tryOnComplete(error?: Error) {
    try {
      this.onComplete(error);
    } catch (e) {
      // FIXME: if error isn't null the delegate error should
      // reference both exceptions so that we don't swallow them.
      this.delegate.complete(e);
    }
  }

  next(data: TA) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.tryOnNext(data);
    }
  }

  complete(error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.isStopped = true;
      this.tryOnComplete(error);
    }
  }
}

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  private observer: ObserverLike<T>;

  constructor(delegate: SubscriberLike<T>, observer: ObserverLike<T>) {
    super(delegate);
    this.observer = observer;
  }

  protected onNext(data: T) {
    this.observer.next(data);
    this.delegate.next(data);
  }

  protected onComplete(error?: Error) {
    this.observer.complete(error);
    this.delegate.complete(error);
  }
}

export const observe = <T>(observer: ObserverLike<T>): Operator<T, T> => (
  subscriber: SubscriberLike<T>,
) => new ObserveSubscriber(subscriber, observer);

class SafeObserver<T> implements ObserverLike<T> {
  private readonly clearQueue: DisposableOrTeardown = () => {
    this.nextQueue.length = 0;
  };
  private readonly continuation: SchedulerContinuationResult;
  private readonly nextQueue: Array<T> = [];
  private readonly priority?: number;
  private readonly subscriber: SubscriberLike<T>;

  private isComplete = false;
  private error: Error | undefined;

  constructor(subscriber: SubscriberLike<T>, priority?: number) {
    this.subscriber = subscriber;
    this.priority = priority;

    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
    };

    this.subscriber.add(this.clearQueue);
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    while (this.nextQueue.length > 0) {
      const next = this.nextQueue.shift() as T;
      this.subscriber.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.remainingEvents > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.continuation;
      }
    }

    if (this.isComplete) {
      this.subscriber.remove(this.clearQueue);
      this.subscriber.complete(this.error);
    }
    return;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.subscriber.schedule(this.drainQueue, 0, this.priority);
    }
  }

  next(data: T) {
    if (!this.isComplete) {
      this.nextQueue.push(data);
      this.scheduleDrainQueue();
    }
  }

  complete(error?: Error) {
    if (!this.isComplete) {
      this.isComplete = true;
      this.error = error;
      this.scheduleDrainQueue();
    }
  }
}

const toSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
  priority?: number,
): ObserverLike<T> => new SafeObserver(subscriber, priority);

export const Subscriber = {
  toSafeObserver,
};
