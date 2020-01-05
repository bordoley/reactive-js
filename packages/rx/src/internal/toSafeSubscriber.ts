import { SchedulerContinuationResultLike } from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";
import { ErrorLike } from "@reactive-js/disposable";
import { AbstractDelegatingSubscriber } from "./subscriber";

class SafeSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private readonly continuation = { continuation: this };
  private error: ErrorLike | undefined;
  private readonly nextQueue: Array<T> = [];
  readonly run = producerMixin.run;

  constructor(readonly subscriber: SubscriberLike<T>) {
    super(subscriber);
    this.add(error => {
      this.error = error;
      this.scheduleDrainQueue();
    });
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isDisposed ? 1 : 0);
  }

  notify(next: T): void {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      this.scheduleDrainQueue();
    }
  }

  produce(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const subscriber = this.delegate;
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

    if (this.isDisposed) {
      this.delegate.dispose(this.error);
    }
  }

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.delegate.schedule(this);
    }
  }
}

export const toSafeSubscriber = <T>(
  subscriber: SubscriberLike<T>,
): SubscriberLike<T> => new SafeSubscriber(subscriber);
