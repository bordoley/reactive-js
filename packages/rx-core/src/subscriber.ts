import {
  CompositeDisposableLike,
  Disposable,
  DisposableLike
} from "@rx-min/rx-disposables";

import { ObserverLike, Notification, Notifications } from "./observer";
import { SchedulerLike } from "./scheduler";

export interface SubscriberLike<T>
  extends ObserverLike<T>,
    CompositeDisposableLike {
  readonly isConnected: boolean;
  readonly scheduler: SchedulerLike;
}

export abstract class DelegatingSubscriber<A, B> implements SubscriberLike<A> {
  private isStopped = false;
  readonly delegate: SubscriberLike<B>;

  constructor(delegate: SubscriberLike<B>) {
    this.delegate = delegate;

    delegate.add(
      Disposable.create(() => {
        this.isStopped = true;
      })
    );
  }

  get isConnected() {
    return this.delegate.isConnected;
  }

  get scheduler() {
    return this.delegate.scheduler;
  }

  get isDisposed() {
    return this.delegate.isDisposed;
  }

  add(disposable: DisposableLike): CompositeDisposableLike {
    this.delegate.add(disposable);
    return this;
  }

  remove(disposable: DisposableLike): CompositeDisposableLike {
    this.delegate.remove(disposable);
    return this;
  }

  dispose() {
    this.delegate.dispose();
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

export abstract class MonoTypeDelegatingSubscriber<
  T
> extends DelegatingSubscriber<T, T> {}
