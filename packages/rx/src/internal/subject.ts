import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposable";
import {
  ErrorLike,
  ObserverLike,
  SubjectResourceLike,
  SubscriberLike,
} from "./interfaces";
import { createSafeObserver } from "./safeObserver";

const enum NotificationKind {
  Next = 1,
  Complete = 2,
}

type Notification<T> =
  | [NotificationKind.Next, T]
  | [NotificationKind.Complete, ErrorLike | undefined];

const notify = <T>(
  observer: ObserverLike<T>,
  notification: Notification<T>,
) => {
  switch (notification[0]) {
    case NotificationKind.Next:
      observer.onNext(notification[1]);
      break;
    case NotificationKind.Complete:
      observer.onComplete(notification[1]);
      break;
  }
};

class SubjectImpl<T> implements SubjectResourceLike<T> {
  private readonly disposable: DisposableLike;
  private isCompleted = false;
  private readonly observers: Array<ObserverLike<T>> = [];
  private readonly replayed: Notification<T>[] = [];

  constructor(private readonly count: number) {
    this.disposable = createDisposable();
    this.count = count;
    this.add(() => {
      this.isCompleted = true;
      this.observers.length = 0;
      this.replayed.length = 0;
    });
  }

  get subscriberCount() {
    return this.observers.length;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  dispose() {
    this.disposable.dispose();
  }

  onComplete(error?: ErrorLike) {
    if (this.isCompleted) {
      return;
    }

    this.pushNotification([NotificationKind.Complete, error]);

    this.isCompleted = true;
    const observers = this.observers.slice();
    this.observers.length = 0;

    for (const observer of observers) {
      observer.onComplete(error);
    }
  }

  onNext(data: T) {
    if (this.isCompleted) {
      return;
    }

    this.pushNotification([NotificationKind.Next, data]);

    const observers = this.observers.slice();
    for (const observer of observers) {
      observer.onNext(data);
    }
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
    return this;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.disposable.isDisposed) {
      // The idea here is that an onSubscribe function may
      // call next from unscheduled sources such as event handlers.
      // So we marshall those events back to the scheduler.
      const observer = createSafeObserver(subscriber);

      // The observer is a safe observer, queues all notifications
      // until a drain is scheduled. Hence there is no need to
      // copy the replayed notifications before publishing via notify.
      for (const notif of this.replayed) {
        notify(observer, notif);
      }

      if (!this.isCompleted) {
        this.observers.push(observer);

        subscriber.add(() => {
          const index = this.observers.indexOf(observer);
          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        });
      }

      this.add(subscriber);
      subscriber.add(() => this.remove(subscriber));
    } else {
      subscriber.dispose();
    }
  }

  private pushNotification(notif: Notification<T>) {
    this.replayed.push(notif);
    if (this.replayed.length > this.count) {
      this.replayed.shift();
    }
  }
}

export const createSubject = <T>(replayCount = 0): SubjectResourceLike<T> =>
  new SubjectImpl(replayCount);
