import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
  Notification,
  SchedulerContinuation,
  Notifications,
} from "@rx-min/rx-core";

class DelaySubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly delay: number;
  private readonly queue: Array<
    [number, Notification, T | Error | undefined]
  > = [];

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

  private doSchedule(notif: Notification, data: T | Error | undefined) {
    const now = this.scheduler.now;
    const dueTime = now + this.delay;
    this.queue.push([dueTime, notif, data]);

    if (this.queue.length === 1) {
      this.scheduler.schedule(this.doWork, this.delay);
    }
  }

  protected onComplete(data: Error | undefined) {
    this.doSchedule(Notifications.complete, data);
  }

  protected onNext(data: T) {
    this.doSchedule(Notifications.next, data);
  }
}

export const delay = <T>(dueTime: number): Operator<T, T> => subscriber =>
  new DelaySubscriber(subscriber, dueTime);
