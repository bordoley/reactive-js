import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
  notify,
  Notification,
  NotificationKind,
} from "@reactive-js/rx-core";

import { SchedulerContinuation } from "@reactive-js/scheduler";

class DelaySubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly delay: number;
  private readonly priority: number;
  private readonly queue: Array<[number, Notification<T>]> = [];
  private isComplete = false;
  private error: Error | undefined;

  constructor(delegate: SubscriberLike<T>, delay: number, priority: number) {
    super(delegate);
    this.delay = delay;
    this.priority = priority;
  }

  private doWork: SchedulerContinuation = shouldYield => {
    const now = this.scheduler.now;
    while (this.queue.length > 0) {
      const [nextDueTime, notification] = this.queue[0];

      if (now >= nextDueTime) {
        this.queue.shift();
        notify(this.delegate, notification);
      } else {
        const delay = nextDueTime - now;
        return [this.doWork, delay, this.priority];
      }

      const yieldRequested = shouldYield();

      if (yieldRequested && this.queue.length > 0) {
        return [this.doWork, 0, this.priority];
      }
    }
  };


  private doSchedule(notification: Notification<T>) {
    const now = this.scheduler.now;
    const dueTime = now + this.delay;
    this.queue.push([dueTime, notification]);

    if (this.queue.length === 1) {
      this.scheduler.schedule(this.doWork, this.delay, this.priority);
    }
  }

  protected onComplete(error?: Error) {
    this.doSchedule([NotificationKind.Complete, error]);
  }

  protected onNext(data: T) {
    this.doSchedule([NotificationKind.Next, data]);
  }
}

export const delay = <T>(dueTime: number, priority: number = 3): Operator<T, T> => {
  if (dueTime <= 0) {
    throw new Error("dueTime must be greater than 0");
  }
  return subscriber => new DelaySubscriber(subscriber, dueTime, priority);
};
