import { DisposableOrTeardown } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./subscriber";

class SafeObserver<T> implements ObserverLike<T> {
  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }
  private readonly continuation: SchedulerContinuationResult;
  private error: Error | undefined;

  private isComplete = false;
  private readonly nextQueue: Array<T> = [];
  private readonly priority?: number;
  private readonly subscriber: SubscriberLike<T>;

  constructor(subscriber: SubscriberLike<T>, priority?: number) {
    this.subscriber = subscriber;
    this.priority = priority;

    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
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
      this.subscriber.schedule(this.drainQueue, 0, this.priority);
    }
  }
}

/**
 * Returns an observer that may be safely notified from any context.
 * The underlying implementation queues notifications and notifies
 * the subscriber on it's scheduler.
 *
 * @param subscriber
 * @param priority
 */
export const toSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
  priority?: number,
): ObserverLike<T> => new SafeObserver(subscriber, priority);
