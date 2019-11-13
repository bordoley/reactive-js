import { Subject, SubjectLike } from "./subject";

import { Notification, SchedulerLike, SubscriberLike } from "@rx-min/rx-core";
import { SerialDisposable } from "@rx-min/rx-disposables";

class ReplayLastSubjectImpl<T> implements SubjectLike<T> {
  private readonly subject: SubjectLike<T> = Subject.create();
  private readonly scheduler: SchedulerLike;
  private event: Notification | void = undefined;
  private data: T | Error | void = undefined;

  constructor(scheduler: SchedulerLike) {
    this.scheduler = scheduler;
  }

  get isDisposed() {
    return this.subject.isDisposed;
  }

  dispose() {
    this.subject.dispose;
  }

  notify(event: Notification, data: T | Error | void): void {
    if (!this.isDisposed) {
      this.event = event;
      this.data = data;
    }

    this.subject.notify(event, data);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed) {
      const innerSubscription = this.scheduler.schedule(
        (_: () => boolean) => {
          const { data, event } = this;
          if (event !== undefined) { subscriber.notify(event, data); }
          subscriber.subscription.remove(innerSubscription);
          this.subject.subscribe(subscriber);          
        },
      );

      subscriber.subscription.add(innerSubscription);
    }
  }
}

const create = <T>(scheduler: SchedulerLike): SubjectLike<T> =>
  new ReplayLastSubjectImpl(scheduler);

export const ReplayLastSubject = {
  create,
};
