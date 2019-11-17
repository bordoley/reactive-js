import { Subject, SubjectLike } from "./subject";

import {
  Notification,
  NotificationKind,
  SubscriberLike,
  notify,
} from "@reactive-js/rx-core";

class ReplayLastSubjectImpl<T> implements SubjectLike<T> {
  private readonly subject: SubjectLike<T> = Subject.create();
  private last: Notification<T> | undefined;

  get isDisposed() {
    return this.subject.isDisposed;
  }

  dispose() {
    this.subject.dispose;
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.last = [NotificationKind.Next, data];
      this.subject.next(data);
    }
  }

  complete(error: Error) {
    if (!this.isDisposed) {
      this.last = [NotificationKind.Complete, error];
      this.subject.complete(error);
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed) {
      const innerSubscription = subscriber.scheduler.schedule(
        (_: () => boolean) => {
          if (this.last !== undefined) {
            notify(subscriber, this.last);
          }
          subscriber.subscription.remove(innerSubscription);
          this.subject.subscribe(subscriber);
        },
      );

      subscriber.subscription.add(innerSubscription);
    }
  }
}

const create = <T>(): SubjectLike<T> => new ReplayLastSubjectImpl();

export const ReplayLastSubject = {
  create,
};
