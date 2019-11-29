import { DisposableOrTeardown } from "@reactive-js/disposable";
import { ObserverLike, SubscriberLike } from "@reactive-js/rx-core";
import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

class SafeObserver<T> implements ObserverLike<T> {
  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }
  private readonly continuation: SchedulerContinuationResult;
  private error: Error | undefined;

  private isComplete = false;
  private readonly nextQueue: Array<T> = [];
  private readonly subscriber: SubscriberLike<T>;

  constructor(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;

    this.continuation = {
      continuation: this.drainQueue,
    };

    this.subscriber.add(this.clearQueue);
  }

  complete(error?: Error) {
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
  private readonly clearQueue: DisposableOrTeardown = () => {
    this.nextQueue.length = 0;
  };

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
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
      this.subscriber.remove(this.clearQueue);
      this.subscriber.complete(this.error);
    }
    return;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.subscriber.schedule(this.drainQueue);
    }
  }
}

/** @ignore */
export const createSafeObserver = <T>(subscriber: SubscriberLike<T>): ObserverLike<T> =>
  new SafeObserver(subscriber);
