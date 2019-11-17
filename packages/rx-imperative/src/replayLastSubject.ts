
import { Subject, SubjectLike } from "./subject";

import { next, complete, Notification, SubscriberLike, notify } from "@reactive-js/rx-core";

import { SchedulerLike } from "@reactive-js/scheduler";

class ReplayLastSubjectImpl<T> implements SubjectLike<T> {
  private readonly subject: SubjectLike<T> = Subject.create();
  private readonly scheduler: SchedulerLike;
  private last: Notification<T> | undefined;

  constructor(scheduler: SchedulerLike) {
    this.scheduler = scheduler;
  }

  get isDisposed() {
    return this.subject.isDisposed;
  }

  dispose() {
    this.subject.dispose;
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.last = [next, data];
      this.subject.next(data);
    }
  }

  complete(error: Error) {
    if (!this.isDisposed) {
      this.last = [complete, error];
      this.subject.complete(error);
    }
  }


  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed) {
      const innerSubscription = this.scheduler.schedule((_: () => boolean) => {
        if (this.last !== undefined) {
          notify(subscriber, this.last);
        }
        subscriber.subscription.remove(innerSubscription);
        this.subject.subscribe(subscriber);
      });

      subscriber.subscription.add(innerSubscription);
    }
  }
}

const create = <T>(scheduler: SchedulerLike): SubjectLike<T> =>
  new ReplayLastSubjectImpl(scheduler);

export const ReplayLastSubject = {
  create,
};
