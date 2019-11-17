import { CompositeDisposableLike, Disposable } from "@reactive-js/disposables";

import { ObserverLike } from "./observer";
import { SchedulerLike } from "@reactive-js/scheduler";

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
    // We allow operators to override the scheduler to enable
    // scheduler hopping.
    return this.delegate.scheduler;
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
