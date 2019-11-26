import {
  Notification,
  NotificationKind,
  notify,
  ObserverLike,
} from "@reactive-js/rx-observer";

import { ObservableLike } from "@reactive-js/rx-observable";

import { ObservableResourceLike } from "@reactive-js/rx-observable-resource";

import {
  create as disposableCreate,
  DisposableLike,
  DisposableOrTeardown,
  disposed,
} from "@reactive-js/disposable";

import { SubscriberLike, toSafeObserver } from "@reactive-js/rx-subscriber";

/** @noInheritDoc */
export interface SubjectLike<T> extends ObserverLike<T>, ObservableLike<T> {}

/** @noInheritDoc */
export interface SubjectResourceLike<T>
  extends SubjectLike<T>,
    ObservableResourceLike<T> {}

abstract class AbstractSubject<T> implements SubjectResourceLike<T> {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  private readonly disposable: DisposableLike;

  private isCompleted = false;
  private readonly observers: Array<ObserverLike<T>> = [];
  private readonly priority?: number;

  constructor(priority?: number) {
    this.priority = priority;
    this.disposable = disposableCreate();
    this.disposable.add(() => {
      this.isCompleted = true;
      this.observers.length = 0;
    });
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  complete(error?: Error) {
    if (this.isCompleted) {
      return;
    }

    this.onComplete(error);

    this.isCompleted = true;
    const subscribers = this.observers.slice();
    this.observers.length = 0;

    for (let subscriber of subscribers) {
      subscriber.complete(error);
    }
  }

  dispose() {
    this.disposable.dispose();
  }

  next(data: T) {
    if (this.isCompleted) {
      return;
    }

    this.onNext(data);

    const subscribers = this.observers.slice();
    for (let subscriber of subscribers) {
      subscriber.next(data);
    }
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.disposable.isDisposed) {
      // The idea here is that an onSubscribe function may
      // call onNext from unscheduled sources such as event handlers.
      // So we marshall those events back to the scheduler.
      const observer = toSafeObserver(subscriber, this.priority);
      this.onSubscribe(observer);

      if (!this.isCompleted) {
        this.observers.push(observer);

        const disposable = disposableCreate();
        disposable.add(() => {
          const index = this.observers.indexOf(observer);
          if (index !== -1) {
            this.observers.splice(index, 1);
          }
          subscriber.remove(disposable);
        });
        subscriber.add(disposable);
      }
    } else {
      subscriber.dispose();
    }
  }

  protected abstract onComplete(error?: Error): void;
  protected abstract onNext(data: T): void;
  protected abstract onSubscribe(observer: ObserverLike<T>): void;
}

class SubjectImpl<T> extends AbstractSubject<T> {
  protected onComplete(error?: Error) {}
  protected onNext(data: T) {}
  protected onSubscribe(observer: ObserverLike<T>) {}
}

class ReplayLastSubjectImpl<T> extends AbstractSubject<T> {
  private readonly count: number;
  private replayed: Notification<T>[] = [];

  constructor(count: number, priority?: number) {
    super(priority);
    this.count = count;
    this.add(() => {
      this.replayed.length = 0;
    });
  }

  protected onComplete(error?: Error) {
    this.pushNotification([NotificationKind.Complete, error]);
  }

  protected onNext(data: T) {
    this.pushNotification([NotificationKind.Next, data]);
  }
  protected onSubscribe(observer: ObserverLike<T>) {
    for (let notif of this.replayed) {
      notify(observer, notif);
    }
  }

  private pushNotification(notif: Notification<T>) {
    this.replayed.push(notif);
    if (this.replayed.length > this.count) {
      this.replayed.shift();
    }
  }
}

export const create = <T>(priority?: number): SubjectResourceLike<T> =>
  new SubjectImpl(priority);

export const createWithReplay = <T>(
  count: number,
  priority?: number,
): SubjectResourceLike<T> => new ReplayLastSubjectImpl(count, priority);
