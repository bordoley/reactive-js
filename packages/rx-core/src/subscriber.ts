import { CompositeDisposableLike, Disposable } from "@rx-min/rx-disposables";

import { ObserverLike, Notification, Notifications } from "./observer";
import { SchedulerLike } from "./scheduler";

export interface SubscriberLike<T> extends ObserverLike<T> {
  readonly isConnected: boolean;
  readonly scheduler: SchedulerLike;
  readonly subscription: CompositeDisposableLike;
}

export const throwIfNotConnected = <T>(subscriber: SubscriberLike<T>) => {
  if (!subscriber.isConnected) {
    throw new Error("Attempted to notify subscriber before it is connected");
  }
};

export abstract class DelegatingSubscriber<A, B> implements SubscriberLike<A> {
  private isStopped = false;
  private readonly source: SubscriberLike<any>;

  readonly delegate: SubscriberLike<B>;

  constructor(delegate: SubscriberLike<B>) {
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

  protected abstract onNext(data: A): void;

  protected abstract onComplete(error: Error | void): void;

  private tryOnNext(data: A) {
    try {
      this.onNext(data);
    } catch (e) {
      this.notify(Notifications.complete, e);
    }
  }

  private tryOnComplete(data: Error | void) {
    try {
      this.onComplete(data);
    } catch (e) {
      this.delegate.notify(Notifications.complete, e);
    }
  }

  notify(notification: Notification, data: A | Error | void) {
    throwIfNotConnected(this);

    if (!this.isStopped) {
      switch (notification) {
        case Notifications.next:
          this.tryOnNext(data as A);
          break;
        case Notifications.complete:
          this.isStopped = true;
          this.tryOnComplete(data as Error | void);
          break;
      }
    }
  }
}
