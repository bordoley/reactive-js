import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
  Notification,
  Notifications,
} from "@reactive-js/rx-core";

import { SchedulerContinuation } from "@reactive-js/scheduler";

class DelaySubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly delay: number;
  private readonly queue: Array<[number, Notification, T | Error | void]> = [];

  constructor(delegate: SubscriberLike<T>, delay: number) {
    super(delegate);
    this.delay = delay;
  }

  private doWork: SchedulerContinuation = shouldYield => {
    const now = this.scheduler.now;
    while (this.queue.length > 0) {
      const [nextDueTime, notif, data] = this.queue[0];

      if (now >= nextDueTime) {
        this.queue.shift();
        this.delegate.notify(notif, data);
      } else {
        const delay = nextDueTime - now;
        return [this.doWork, delay];
      }

      const yieldRequested = shouldYield();
      if (yieldRequested && this.queue.length > 0) {
        return this.doWork;
      }
    }
  };

  private doSchedule(notif: Notification, data: T | Error | void) {
    const now = this.scheduler.now;
    const dueTime = now + this.delay;
    this.queue.push([dueTime, notif, data]);

    if (this.queue.length === 1) {
      this.scheduler.schedule(this.doWork, this.delay);
    }
  }

  protected onComplete(data: Error | void) {
    this.doSchedule(Notifications.complete, data);
  }

  protected onNext(data: T) {
    this.doSchedule(Notifications.next, data);
  }
}

export const delay = <T>(dueTime: number): Operator<T, T> => {
  if (dueTime <= 0) {
    throw new Error("dueTime must be greater than 0");
  }
  return subscriber => new DelaySubscriber(subscriber, dueTime);
};
