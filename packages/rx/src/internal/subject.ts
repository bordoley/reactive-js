import {
  createDisposable,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  ObserverLike,
  SubjectLike,
  SubscriberLike,
} from "./interfaces";
import {
  subscriberMixin
} from "./subscriber"
import { createSafeObserver } from "./safeObserver";
import { SchedulerLike } from "@reactive-js/scheduler";

class SubjectImpl<T> implements SubjectLike<T> {
  readonly add = subscriberMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = subscriberMixin.dispose;
  private error?: ErrorLike;
  private readonly observers: Array<ObserverLike<T>> = [];
  private readonly replayed: T[] = [];
  readonly schedule = subscriberMixin.schedule;

  constructor(
    private readonly scheduler: SchedulerLike,
    private readonly replayCount: number,
  ) {
    this.add(error => {
      this.error = error;

      const observers = this.observers.slice();
      this.observers.length = 0;
      for (const observer of observers) {
        observer.onDispose(error);
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
    return this.observers.length;
  }

  notifyNext(next: T): void {
    if (!this.isDisposed) {
      if (this.replayCount > 0) {
        this.replayed.push(next);
        if (this.replayed.length > this.replayCount) {
          this.replayed.shift();
        }
      }
  
      const observers = this.observers.slice();
      for (const observer of observers) {
        observer.onNext(next);
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const observer = createSafeObserver(subscriber);

    // The observer is a safe observer, queues all notifications
    // until a drain is scheduled. Hence there is no need to
    // copy the replayed notifications before publishing via notify.
    for (const next of this.replayed) {
      observer.onNext(next);
    }

    if (!this.isDisposed) {
      this.observers.push(observer);

      subscriber.add(() => {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
          this.observers.splice(index, 1);
        }
      });
    } else {
      observer.onDispose(this.error);
    }
  }
}

export const createSubject = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): SubjectLike<T> =>
  new SubjectImpl(scheduler, replayCount);
