import {
  Disposable,
  DisposableOrTeardown,
  SerialDisposableLike,
  SerialDisposable,
  DisposableLike,
} from "@reactive-js/disposables";

import { ObserverLike } from "./observer";
import {
  SchedulerLike,
  SchedulerResourceLike,
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";
import { createSecurePair } from "tls";

export interface SubscriberLike<T>
  extends ObserverLike<T>,
    DisposableLike,
    SchedulerResourceLike {
  readonly isConnected: boolean;
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

class AutoDisposingSubscriberImpl<T> implements SubscriberLike<T> {
  scheduler: SchedulerLike;
  subscription: DisposableLike;

  isConnected = false;

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

  add(disposable: DisposableOrTeardown) {
    this.subscription.add(disposable);
  }

  complete(_error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    this.dispose();
  }

  dispose() {
    this.subscription.dispose();
  }

  next(data: T) {
    if (__DEV__) {
      checkState(this);
    }
  }

  remove(disposable: DisposableOrTeardown) {
    this.subscription.remove(disposable);
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
    priority?: number,
  ): DisposableLike {
    return this.scheduler.schedule(continuation, delay, priority);
  }
}

export const AutoDisposingSubscriber = {
  create: (scheduler: SchedulerLike, subscription: DisposableLike) =>
    new AutoDisposingSubscriberImpl(scheduler, subscription),
};

export abstract class DelegatingSubscriber<TA, TB>
  implements SubscriberLike<TA> {
  private readonly scheduler: SchedulerLike;
  private readonly subscription: DisposableLike;
  private readonly source: SubscriberLike<any>;

  readonly delegate: SubscriberLike<TB>;

  private isStopped = false;

  constructor(delegate: SubscriberLike<TB>) {
    this.delegate = delegate;

    this.source =
      delegate instanceof DelegatingSubscriber ? delegate.source : delegate;

    this.scheduler =
      delegate instanceof DelegatingSubscriber
        ? delegate.scheduler
        : delegate instanceof AutoDisposingSubscriberImpl
        ? delegate.scheduler
        : delegate;

    this.subscription =
      delegate instanceof DelegatingSubscriber
        ? delegate.subscription
        : delegate instanceof AutoDisposingSubscriberImpl
        ? delegate.subscription
        : delegate;

    this.source.add(() => {
        this.isStopped = true;
      },
    );
  }

  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  get isConnected() {
    return this.source.isConnected;
  }

  get isDisposed() {
    return this.subscription.isDisposed;
  }

  get now() {
    return this.scheduler.now;
  }

  add(disposable: DisposableOrTeardown) {
    this.subscription.add(disposable);
  }

  dispose() {
    this.subscription.dispose();
  }

  remove(disposable: DisposableOrTeardown) {
    this.subscription.remove(disposable);
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
    priority?: number,
  ): DisposableLike {
    return this.scheduler.schedule(continuation, delay, priority);
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
  private readonly delegate: SubscriberLike<T>;
  private readonly continuation: SchedulerContinuationResult;
  private readonly priority?: number;
  private readonly schedulerSubscription: SerialDisposableLike = SerialDisposable.create();
  private readonly queueClearDisposable: DisposableLike;

  private readonly nextQueue: Array<T> = [];
  private isComplete = false;
  private error: Error | undefined;

  constructor(delegate: SubscriberLike<T>, priority?: number) {
    this.delegate = delegate;

    this.priority = priority;
    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
    };

    this.queueClearDisposable = Disposable.create();
    this.queueClearDisposable.add(
      () => {
        this.nextQueue.length = 0;
      },
    );

    this.delegate.add(this.schedulerSubscription);
    this.delegate.add(this.queueClearDisposable);
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    while (this.nextQueue.length > 0) {
      const next = this.nextQueue.shift() as T;
      this.delegate.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.remainingEvents > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.continuation;
      }
    }

    if (this.isComplete) {
      this.delegate.complete(this.error);
      this.delegate.remove(this.schedulerSubscription);
      this.delegate.remove(this.queueClearDisposable);
    }

    this.schedulerSubscription.disposable = Disposable.disposed;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.schedulerSubscription.disposable = this.delegate.schedule(
        this.drainQueue,
        0,
        this.priority,
      );
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

export const toSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
  priority?: number,
): ObserverLike<T> => new SafeObserver(subscriber, priority);

export const Subscriber = {
  toSafeObserver,
};
