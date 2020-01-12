import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { SafeSubscriberLike, SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";
import { ErrorLike } from "@reactive-js/disposable";
import { AbstractDelegatingSubscriber } from "./subscriber";

const scheduleDrainQueue = <T>(subscriber: SafeSubscriberImpl<T>) => {
  if (subscriber.remainingEvents === 1) {
    subscriber.delegate.schedule(subscriber);
  }
};

class SafeSubscriberImpl<T> extends AbstractDelegatingSubscriber<T, T>
  implements SafeSubscriberLike<T> {
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
    this.delegate.notify(next);
  }

  notifySafe(next: T): void {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
    }
  }

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const delegate = this.delegate;
    const nextQueue = this.nextQueue;

    if (shouldYield !== undefined) {
      while (nextQueue.length > 0 && !delegate.isDisposed) {
        const next = nextQueue.shift() as T;
        delegate.notify(next);

        if (shouldYield() && this.remainingEvents > 0) {
          return this;
        }
      }
    } else {
      while (nextQueue.length > 0 && !delegate.isDisposed) {
        const next = nextQueue.shift() as T;
        delegate.notify(next);
      }
    }

    if (this.isDisposed) {
      delegate.dispose(this.error);
    }
  }
}

/**
 * Returns a `SafeSubscriberLike` that delegates to the provided subscriber.
 * 
 * @param subscriber The `SubscriberLike` instance to wrap in a `SafeSubscriberLike`.
 */
export const toSafeSubscriber = <T>(
  subscriber: SubscriberLike<T>,
): SafeSubscriberLike<T> => new SafeSubscriberImpl(subscriber);
