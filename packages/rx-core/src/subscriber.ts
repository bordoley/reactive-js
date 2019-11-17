import {
  CompositeDisposableLike,
  Disposable,
  SerialDisposableLike,
  SerialDisposable,
  DisposableLike,
} from "@reactive-js/disposables";

import { ObserverLike } from "./observer";
import {
  SchedulerLike,
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

export interface SubscriberLike<T> extends ObserverLike<T> {
  readonly isConnected: boolean;
  readonly scheduler: SchedulerLike;
  readonly subscription: CompositeDisposableLike;
}

export interface Operator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

const throwIfNotConnected = <T>(subscriber: SubscriberLike<T>) => {
  if (!subscriber.isConnected) {
    throw new Error("Attempted to notify subscriber before it is connected");
  }
};

const __DEV__ = process.env.NODE_ENV !== "production";

export class AutoDisposingSubscriber<T> implements SubscriberLike<T> {
  readonly subscription: CompositeDisposableLike;
  readonly scheduler: SchedulerLike;
  isConnected = false;

  constructor(scheduler: SchedulerLike, subscription: CompositeDisposableLike) {
    this.scheduler = scheduler;
    this.subscription = subscription;
  }

  next(data: T) {
    if (__DEV__) {
      throwIfNotConnected(this);
    }
  }

  complete(_error?: Error) {
    if (__DEV__) {
      throwIfNotConnected(this);
    }

    this.subscription.dispose();
  }
}

export abstract class DelegatingSubscriber<TA, TB>
  implements SubscriberLike<TA> {
  private isStopped = false;
  private readonly source: SubscriberLike<any>;

  readonly delegate: SubscriberLike<TB>;

  constructor(delegate: SubscriberLike<TB>) {
    this.delegate = delegate;

    // We track the source to improve the performance
    // of the isConnected lookup that happens in notify.
    this.source =
      delegate instanceof DelegatingSubscriber ? delegate.source : delegate;

    delegate.subscription.add(
      Disposable.create(() => {
        this.isStopped = true;
      }),
    );
  }

  get isConnected() {
    return this.source.isConnected;
  }

  get scheduler() {
    return this.source.scheduler;
  }

  get subscription() {
    return this.source.subscription;
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
      this.delegate.complete(e);
    }
  }

  next(data: TA) {
    if (__DEV__) {
      throwIfNotConnected(this);
    }

    if (!this.isStopped) {
      this.tryOnNext(data);
    }
  }

  complete(error?: Error) {
    if (__DEV__) {
      throwIfNotConnected(this);
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

class ObserveOnSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly continuation: SchedulerContinuationResult;
  private readonly priority?: number;
  private readonly schedulerSubscription: SerialDisposableLike = SerialDisposable.create();
  private readonly queueClearDisposable: DisposableLike = Disposable.create(
    () => {this.nextQueue.length = 0}
  );

  private readonly nextQueue: Array<T> = [];
  private isComplete = false;
  private error: Error | undefined;

  constructor(delegate: SubscriberLike<T>, priority?: number) {
    super(delegate);

    this.priority = priority;
    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
    };

    this.subscription.add(this.schedulerSubscription).add(this.queueClearDisposable);
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
      this.subscription.remove(this.schedulerSubscription);
      this.subscription.remove(this.queueClearDisposable);
    }

    this.schedulerSubscription.innerDisposable = Disposable.disposed;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.schedulerSubscription.innerDisposable = this.scheduler.schedule(
        this.drainQueue,
        0,
        this.priority,
      );
    }
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }

  protected onNext(data: T) {
    this.nextQueue.push(data);
    this.scheduleDrainQueue();
  }

  protected onComplete(error?: Error) {
    this.isComplete = true;
    this.error = error;
    this.scheduleDrainQueue();
  }
}

export const observeOn = <T>(priority?: number): Operator<T, T> => subscriber =>
  new ObserveOnSubscriber(subscriber, priority);
