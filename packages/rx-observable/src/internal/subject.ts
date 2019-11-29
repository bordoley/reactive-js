import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposable";
import {
  ObservableLike,
  ObservableResourceLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { createSafeObserver } from "./safeObserver";

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

  constructor() {
    this.disposable = createDisposable();
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
      const observer = createSafeObserver(subscriber);
      this.onSubscribe(observer);

      if (!this.isCompleted) {
        this.observers.push(observer);

        const disposable = createDisposable();
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

enum NotificationKind {
  Next = 1,
  Complete = 2,
}

type Notification<T> =
  | [NotificationKind.Next, T]
  | [NotificationKind.Complete, Error | undefined];

const notify = <T>(
  observer: ObserverLike<T>,
  notification: Notification<T>,
) => {
  switch (notification[0]) {
    case NotificationKind.Next:
      observer.next(notification[1]);
      break;
    case NotificationKind.Complete:
      observer.complete(notification[1]);
      break;
  }
};

class ReplayLastSubjectImpl<T> extends AbstractSubject<T> {
  private readonly count: number;
  private replayed: Notification<T>[] = [];

  constructor(count: number) {
    super();
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
    // The observer is a safe observer, an queues all notifications
    // until a drain is scheduled. Hence there is no need to
    // copy the replayed notifications before publishing via notify.
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

export const createSubject = <T>(
  replayCount: number = 0,
): SubjectResourceLike<T> =>
  replayCount > 0 ? new ReplayLastSubjectImpl(replayCount) : new SubjectImpl();
