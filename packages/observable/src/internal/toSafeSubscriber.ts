import {
  createDisposable,
  disposableMixin,
  ErrorLike,
} from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { SafeSubscriberLike, SubscriberLike } from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";

class SafeSubscriberSchedulerContinuation<T>
  implements SchedulerContinuationLike {
  readonly add = disposableMixin.add;

  readonly disposable = createDisposable(_ => {
    this.isDisposed = true;
  });

  readonly dispose = disposableMixin.dispose;

  isDisposed = false;

  constructor(private readonly subscriber: SafeSubscriberImpl<T>) {}

  produce(shouldYield?: () => boolean) {
    const subscriber = this.subscriber;
    const nextQueue = subscriber.nextQueue;
    const delegate = subscriber.delegate;

    if (shouldYield !== undefined) {
      while (nextQueue.length > 0 && !delegate.isDisposed) {
        const next = nextQueue.shift() as T;
        delegate.notify(next);

        const hasRemainingEvents =
          subscriber.nextQueue.length > 0 || subscriber.isDisposed;

        if (hasRemainingEvents && shouldYield()) {
          return;
        }
      }
    } else {
      while (nextQueue.length > 0 && !delegate.isDisposed) {
        const next = nextQueue.shift() as T;
        delegate.notify(next);
      }
    }

    if (subscriber.isDisposed) {
      delegate.dispose(subscriber.error);
    }

    this.dispose();
  }

  run(shouldYield?: () => boolean) {
    if (!this.isDisposed) {
      try {
        this.produce(shouldYield);
      } catch (cause) {
        const error = { cause };
        this.subscriber.dispose(error);
        this.dispose();
      }
    }
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
