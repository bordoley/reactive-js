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
} from "@reactive-js/rx";
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
      observer.next(notification[1]);
      break;
    case NotificationKind.Complete:
      observer.complete(notification[1]);
      break;
  }
};

class SubjectImpl<T> implements SubjectResourceLike<T> {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  private readonly disposable: DisposableLike;

  private isCompleted = false;
  private readonly observers: Array<ObserverLike<T>> = [];
  private readonly count: number;
  private replayed: Notification<T>[] = [];

  constructor(count: number) {
    this.disposable = createDisposable();
    this.count = count;
    this.add(() => {
      this.isCompleted = true;
      this.observers.length = 0;
      this.replayed.length = 0;
    });
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  complete(error?: ErrorLike) {
    if (this.isCompleted) {
      return;
    }

    this.pushNotification([NotificationKind.Complete, error]);

    this.isCompleted = true;
    const subscribers = this.observers.slice();
    this.observers.length = 0;

    for (const subscriber of subscribers) {
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

    this.pushNotification([NotificationKind.Next, data]);

    const subscribers = this.observers.slice();
    for (const subscriber of subscribers) {
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
