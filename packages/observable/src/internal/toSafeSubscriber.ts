import { ErrorLike } from "@reactive-js/disposable";
import { AbstractSchedulerContinuation } from "@reactive-js/scheduler";
import { alwaysFalse } from "./functions";
import { SafeSubscriberLike, SubscriberLike } from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";

class SafeSubscriberSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly subscriber: SafeSubscriberImpl<T>) {
    super();
  }

  produce(shouldYield?: () => boolean): number {
    const subscriber = this.subscriber;
    const nextQueue = subscriber.nextQueue;
    const delegate = subscriber.delegate;

    shouldYield = shouldYield || alwaysFalse;

    try {
      while (nextQueue.length > 0 && !delegate.isDisposed) {
        const next = nextQueue.shift() as T;
        delegate.notify(next);

        const hasRemainingEvents =
          subscriber.nextQueue.length > 0 || subscriber.isDisposed;

        if (hasRemainingEvents && shouldYield()) {
          return 0;
        }
      }

      if (subscriber.isDisposed) {
        delegate.dispose(subscriber.error);
      }
    } catch (cause) {
      delegate.dispose({ cause });
    }

    return -1;
  }
}

const scheduleDrainQueue = <T>(subscriber: SafeSubscriberImpl<T>) => {
  const remainingEvents =
    subscriber.nextQueue.length + (subscriber.isDisposed ? 1 : 0);
  if (remainingEvents === 1) {
    const producer = new SafeSubscriberSchedulerContinuation(subscriber);
    subscriber.delegate.schedule(producer);
  }
};

class SafeSubscriberImpl<T> extends AbstractDelegatingSubscriber<T, T>
  implements SafeSubscriberLike<T> {
  error: ErrorLike | undefined;
  readonly nextQueue: Array<T> = [];

  constructor(readonly subscriber: SubscriberLike<T>) {
    super(subscriber);
    this.add(error => {
      this.error = error;
      scheduleDrainQueue(this);
    });
  }

  notify(next: T): void {
    this.delegate.notify(next);
  }

  dispatch(next: T): void {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
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
