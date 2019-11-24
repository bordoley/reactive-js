import {
  Notification,
  NotificationKind,
  notify,
} from "@reactive-js/rx-observer";

import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";

import { SchedulerContinuation } from "@reactive-js/scheduler";

class DelaySubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly delay: number;
  private readonly priority: number | undefined;
  private readonly queue: Array<[number, Notification<T>]> = [];

  constructor(
    delegate: SubscriberLike<T>,
    delay: number,
    priority: number | undefined,
  ) {
    super(delegate);
    this.delay = delay;
    this.priority = priority;
  }

  protected onComplete(error?: Error) {
    this.doSchedule([NotificationKind.Complete, error]);
  }

  protected onNext(data: T) {
    this.doSchedule([NotificationKind.Next, data]);
  }

  private doSchedule(notification: Notification<T>) {
    const now = this.now;
    const dueTime = now + this.delay;
    this.queue.push([dueTime, notification]);

    if (this.queue.length === 1) {
      this.schedule(this.doWork, this.delay, this.priority);
    }
  }

  private doWork: SchedulerContinuation = shouldYield => {
    const now = this.now;
    while (this.queue.length > 0) {
      const [nextDueTime, notification] = this.queue[0];

      if (now >= nextDueTime) {
        this.queue.shift();
        notify(this.delegate, notification);
      } else {
        const delay = nextDueTime - now;
        return { continuation: this.doWork, delay, priority: this.priority };
      }

      const yieldRequested = shouldYield();
      if (yieldRequested && this.queue.length > 0) {
        return { continuation: this.doWork, delay: 0, priority: this.priority };
      }
    }
    return;
  };
}

export const delay = <T>(
  dueTime: number,
  priority?: number,
): Operator<T, T> => {
  if (dueTime <= 0) {
    throw new Error("dueTime must be greater than 0");
  }
  return subscriber => new DelaySubscriber(subscriber, dueTime, priority);
};
