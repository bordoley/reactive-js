import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ErrorLike, ObserverLike, SubscriberLike } from "./interfaces";

class SafeObserver<T> implements ObserverLike<T> {
  private readonly drainQueue: SchedulerContinuationLike = shouldYield => {
    try {
      while (this.nextQueue.length > 0 && !this.subscriber.isCompleted) {
        const next = this.nextQueue.shift() as T;
        this.subscriber.nextUnsafe(next);

        const yieldRequest = shouldYield();
        const hasMoreEvents = this.remainingEvents > 0;

        if (yieldRequest && hasMoreEvents) {
          return this.continuation;
        }
      }
    } catch (cause) {
      this.isCompleted = true;
      this.error = { cause };
    }

    if (this.isCompleted) {
      this.subscriber.complete(this.error);
    }
    return;
  };
  private readonly continuation = { continuation: this.drainQueue };
  private error: ErrorLike | undefined;
  private isCompleted = false;
  private readonly nextQueue: Array<T> = [];

  constructor(private readonly subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    this.subscriber.add(() => {
      this.nextQueue.length = 0;
      this.isCompleted = true;
    });
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isCompleted ? 1 : 0);
  }

  onComplete(error?: ErrorLike) {
    if (!this.isCompleted) {
      this.isCompleted = true;
      this.error = error;
      this.scheduleDrainQueue();
    }
  }

  onNext(data: T) {
    if (!this.isCompleted) {
      this.nextQueue.push(data);
      this.scheduleDrainQueue();
    }
  }

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.subscriber.schedule(this.drainQueue);
    }
  }
}

/** @ignore */
export const createSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
): ObserverLike<T> => new SafeObserver(subscriber);
