import { SubjectLike, SubscriberLike } from "./interfaces";
import { AbstractSubscriber } from "./subscriber";
import { toSafeSubscriber } from "./toSafeSubscriber";
import { SchedulerLike } from "@reactive-js/scheduler";

class SubjectImpl<T> extends AbstractSubscriber<T> implements SubjectLike<T> {
  private readonly subscribers: Array<SubscriberLike<T>> = [];
  private readonly replayed: T[] = [];

  constructor(scheduler: SchedulerLike, private readonly replayCount: number) {
    super(scheduler);
  }

  get subscriberCount() {
    return this.subscribers.length;
  }

  notify(next: T): void {
    if (!this.isDisposed) {
      if (this.replayCount > 0) {
        this.replayed.push(next);
        if (this.replayed.length > this.replayCount) {
          this.replayed.shift();
        }
      }

      const observers = this.subscribers.slice();
      for (const observer of observers) {
        observer.notify(next);
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const safeSubscriber = toSafeSubscriber(subscriber);

    if (!this.isDisposed) {
      this.subscribers.push(safeSubscriber);

      safeSubscriber.add(() => {
        const index = this.subscribers.indexOf(safeSubscriber);
        if (index !== -1) {
          this.subscribers.splice(index, 1);
        }
      });
    }

    for (const next of this.replayed) {
      safeSubscriber.notify(next);
    }

    this.add(safeSubscriber);
  }
}

export const createSubject = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): SubjectLike<T> => new SubjectImpl(scheduler, replayCount);
