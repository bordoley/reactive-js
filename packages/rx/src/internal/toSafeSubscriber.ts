import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";
import { ErrorLike } from "@reactive-js/disposable";
import { AbstractDelegatingSubscriber } from "./subscriber";

const scheduleDrainQueue = <T>(subscriber: SafeSubscriber<T>) => {
  if (subscriber.remainingEvents === 1) {
    subscriber.delegate.schedule(subscriber);
  }
}

class SafeSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private error: ErrorLike | undefined;
  private readonly nextQueue: Array<T> = [];
  readonly run = producerMixin.run;

  constructor(readonly subscriber: SubscriberLike<T>) {
    super(subscriber);
    this.add(error => {
      this.error = error;
      scheduleDrainQueue(this);
    });
  }

  get remainingEvents() {
    return this.nextQueue.length + (this.isDisposed ? 1 : 0);
  }

  notify(next: T): void {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
    }
  }

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const subscriber = this.delegate;
    const nextQueue = this.nextQueue;

    if (shouldYield !== undefined) {
      while (nextQueue.length > 0 && !subscriber.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.notify(next);

        if (shouldYield() && this.remainingEvents > 0) {
          return this;
        }
      }
    } else {
      while (nextQueue.length > 0 && !subscriber.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.notify(next);
      }
    }

    if (this.isDisposed) {
      this.delegate.dispose(this.error);
    }
  }
}

/** @ignore */
export const toSafeSubscriber = <T>(
  subscriber: SubscriberLike<T>,
): SubscriberLike<T> => new SafeSubscriber(subscriber);
