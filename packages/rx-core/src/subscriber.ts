import { CompositeDisposableLike, Disposable } from "@rx-min/rx-disposables";

import { ObserverLike, Notification, Notifications } from "./observer";
import { SchedulerLike } from "./scheduler";

export interface SubscriberLike<T> extends ObserverLike<T> {
  readonly isConnected: boolean;
  readonly scheduler: SchedulerLike;
  readonly subscription: CompositeDisposableLike;
}

export abstract class DelegatingSubscriber<A, B> implements SubscriberLike<A> {
  private isStopped = false;
  readonly delegate: SubscriberLike<B>;

  constructor(delegate: SubscriberLike<B>) {
    this.delegate = delegate;

    delegate.subscription.add(
      Disposable.create(() => {
        this.isStopped = true;
      }),
    );
  }

  get isConnected() {
    return this.delegate.isConnected;
  }

  get scheduler() {
    return this.delegate.scheduler;
  }

  get subscription() {
    return this.delegate.subscription;
  }

  protected abstract onNext(data: A): void;

  protected abstract onComplete(error: Error | undefined): void;

  private tryOnNext(data: A) {
    try {
      this.onNext(data);
    } catch (e) {
      this.notify(Notifications.complete, e);
    }
  }

  private tryOnComplete(data: Error | undefined) {
    try {
      this.onComplete(data);
    } catch (e) {
      this.delegate.notify(Notifications.complete, e);
    }
  }

  notify(notification: Notification, data: A | Error | undefined) {
    if (!this.isConnected) {
      throw new Error("Attempted to notify subscriber before it is connected");
    } else if (!this.isStopped) {
      switch (notification) {
        case Notifications.next:
          this.tryOnNext(data as A);
          break;
        case Notifications.complete:
          this.isStopped = true;
          this.tryOnComplete(data as Error | undefined);
          break;
      }
    }
  }
}
