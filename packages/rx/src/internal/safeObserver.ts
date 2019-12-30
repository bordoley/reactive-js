import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { ErrorLike, ObserverLike, SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";

class SafeObserver<T> implements ObserverLike<T>, SchedulerContinuationLike {
  private readonly continuation = { continuation: this };
  private error: ErrorLike | undefined;
  private isCompleted = false;
  private readonly nextQueue: Array<T> = [];
  run = producerMixin.run;

  constructor(private readonly subscriber: SubscriberLike<T>) {
    this.subscriber.add(() => {
      this.nextQueue.length = 0;
      this.isCompleted = false;
      this.error = undefined;
    });
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isCompleted ? 1 : 0);
  }

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const subscriber = this.subscriber;
    const nextQueue = this.nextQueue;

    if (shouldYield !== undefined) {
      while (nextQueue.length > 0 && !subscriber.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.next(next);

        if (shouldYield() && this.remainingEvents > 0) {
          return this.continuation;
        }
      }
    } else {
      while (nextQueue.length > 0 && !subscriber.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.next(next);
      }
    }

    if (this.isCompleted) {
      this.subscriber.complete(this.error);
    }
  }

  onComplete(error?: ErrorLike) {
    if (this.isCompleted || this.subscriber.isDisposed) {
      return;
    }

    this.isCompleted = true;
    this.error = error;
    this.scheduleDrainQueue();
  }

  onNext(data: T) {
    if (this.isCompleted || this.subscriber.isDisposed) {
      return;
    }

    this.nextQueue.push(data);
    this.scheduleDrainQueue();
  }

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.subscriber.schedule(this);
    }
  }
}

/** @ignore */
export const createSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
): ObserverLike<T> => new SafeObserver(subscriber);
