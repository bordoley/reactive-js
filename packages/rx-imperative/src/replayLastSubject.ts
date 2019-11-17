import { Subject, SubjectLike } from "./subject";

import {
  Notification,
  NotificationKind,
  SubscriberLike,
  notify,
} from "@reactive-js/rx-core";

class ReplayLastSubjectImpl<T> implements SubjectLike<T> {
  private readonly subject: SubjectLike<T>;
  private last: Notification<T> | undefined;

  constructor(priority?: number) {
    this.subject = Subject.create(priority);
  }

  get disposable() {
    return this.subject.disposable;
  }

  next(data: T) {
    if (this.disposable.isDisposed) {
      return;
    }

    this.last = [NotificationKind.Next, data];
    this.subject.next(data);
  }

  complete(error: Error) {
    if (this.disposable.isDisposed) {
      return;
    }

    this.last = [NotificationKind.Complete, error];
    this.subject.complete(error);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (this.disposable.isDisposed) {
      return;
    }

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

const create = <T>(priority?: number): SubjectLike<T> =>
  new ReplayLastSubjectImpl(priority);

export const ReplayLastSubject = {
  create,
};
