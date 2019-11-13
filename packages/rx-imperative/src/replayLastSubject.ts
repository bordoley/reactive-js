import { Subject, SubjectLike } from "./subject";

import { Notification, SchedulerLike, SubscriberLike } from "@rx-min/rx-core";

class ReplayLastSubjectImpl<T> implements SubjectLike<T> {
  private readonly subject: SubjectLike<T> = Subject.create();
  private readonly scheduler: SchedulerLike;
  private event: Notification | undefined = undefined;
  private data: T | Error | undefined = undefined;

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
      this.data = data || undefined;
    }

    this.subject.notify(event, data);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed && this.event !== undefined) {
      const { data, event } = this;
      subscriber.subscription.add(
        this.scheduler.schedule((_shouldYield: () => boolean) => {
          if (event === this.event && data === this.data) {
            subscriber.notify(event, data);
          }
        }),
      );
    }
    this.subject.subscribe(subscriber);
  }
}

const create = <T>(scheduler: SchedulerLike): SubjectLike<T> =>
  new ReplayLastSubjectImpl(scheduler);

export const ReplayLastSubject = {
  create,
};
