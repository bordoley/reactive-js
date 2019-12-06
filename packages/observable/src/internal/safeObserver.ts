import { ErrorLike, ObserverLike, SubscriberLike } from "@reactive-js/rx";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";

class SafeObserver<T> implements ObserverLike<T> {
  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }
  private error: ErrorLike | undefined;

  private isComplete = false;
  private readonly nextQueue: Array<T> = [];
  private readonly subscriber: SubscriberLike<T>;

  private readonly teardown = () => {
    this.nextQueue.length = 0;
    this.isComplete = true;
  };

  constructor(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    this.subscriber.add(this.teardown);
  }

  complete(error?: ErrorLike) {
    if (!this.isComplete) {
      this.isComplete = true;
      this.error = error;
      this.scheduleDrainQueue();
    }
  }

  next(data: T) {
    if (!this.isComplete) {
      this.nextQueue.push(data);
      this.scheduleDrainQueue();
    }
  }

  private readonly drainQueue: SchedulerContinuationLike = shouldYield => {
    while (this.nextQueue.length > 0) {
      const next = this.nextQueue.shift() as T;
      this.subscriber.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.remainingEvents > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.continuation;
      }
    }

    if (this.isComplete) {
      this.subscriber.remove(this.teardown);
      this.subscriber.complete(this.error);
    }
    return;
  };

  private readonly continuation = { continuation: this.drainQueue };

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
