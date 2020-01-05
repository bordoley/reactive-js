import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { ObserverLike, SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";
import { ErrorLike } from "@reactive-js/disposable";

class SafeObserver<T> implements ObserverLike<T>, SchedulerContinuationLike {
  private readonly continuation = { continuation: this };
  private error: ErrorLike | undefined;
  private isCompleted = false;
  private readonly nextQueue: Array<T> = [];
  readonly run = producerMixin.run;

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

  produce(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const subscriber = this.subscriber;
    const nextQueue = this.nextQueue;

    if (shouldYield !== undefined) {
      while (nextQueue.length > 0 && !subscriber.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.notify(next);

        if (shouldYield() && this.remainingEvents > 0) {
          return this.continuation;
        }
      }
    } else {
      while (nextQueue.length > 0 && !subscriber.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.notify(next);
      }
    }

    if (this.isCompleted) {
      this.subscriber.dispose(this.error);
    }
  }

  onDispose(error?: ErrorLike) {
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
