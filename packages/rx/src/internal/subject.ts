import {
  createDisposable,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  SubjectLike,
  SubscriberLike,
} from "./interfaces";
import {
  subscriberMixin
} from "./subscriber"
import { toSafeSubscriber } from "./toSafeSubscriber";
import { SchedulerLike } from "@reactive-js/scheduler";

class SubjectImpl<T> implements SubjectLike<T> {
  readonly add = subscriberMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = subscriberMixin.dispose;
  private error?: ErrorLike;
  private readonly subscribers: Array<SubscriberLike<T>> = [];
  private readonly replayed: T[] = [];
  readonly schedule = subscriberMixin.schedule;

  constructor(
    private readonly scheduler: SchedulerLike,
    private readonly replayCount: number,
  ) {
    this.add(error => {
      this.error = error;

      const subscribers = this.subscribers.slice();
      this.subscribers.length = 0;
      for (const subscriber of subscribers) {
        subscriber.dispose(error);
      }
    });
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get now() {
    return this.scheduler.now;
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

    for (const next of this.replayed) {
      safeSubscriber.notify(next);
    }

    if (!this.isDisposed) {
      this.subscribers.push(safeSubscriber);

      subscriber.add(() => {
        const index = this.subscribers.indexOf(safeSubscriber);
        if (index !== -1) {
          this.subscribers.splice(index, 1);
        }
      });
    } else {
      safeSubscriber.dispose(this.error);
    }
  }
}

export const createSubject = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): SubjectLike<T> =>
  new SubjectImpl(scheduler, replayCount);
