import { AbstractSchedulerContinuation, SchedulerLike } from "../../scheduler";
import { alwaysFalse } from "./functions";
import { SafeSubscriberLike, SubscriberLike } from "./interfaces";
import { AbstractSubscriber } from "./subscriber";
import { Exception } from "../../disposable";

class SafeSubscriberSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly subscriber: AbstractSafeSubscriber<T>) {
    super();
  }

  produce(shouldYield?: () => boolean): number {
    const subscriber = this.subscriber;
    const nextQueue = subscriber.nextQueue;

    shouldYield = shouldYield ?? alwaysFalse;

    try {
      while (nextQueue.length > 0 && !this.isDisposed) {
        const next = nextQueue.shift() as T;
        subscriber.onNotify(next);

        const hasRemainingEvents =
          subscriber.nextQueue.length > 0 || subscriber.isDisposed;

        if (hasRemainingEvents && shouldYield()) {
          return 0;
        }
      }

      if (subscriber.isDisposed) {
        subscriber.onDispose(subscriber.error);
      }
    } catch (cause) {
      subscriber.onDispose({ cause });
    }

    return -1;
  }
}

const scheduleDrainQueue = <T>(subscriber: AbstractSafeSubscriber<T>) => {
  const remainingEvents =
    subscriber.nextQueue.length + (subscriber.isDisposed ? 1 : 0);
  if (remainingEvents === 1) {
    const producer = new SafeSubscriberSchedulerContinuation(subscriber);
    subscriber.scheduler.schedule(producer);
  }
};

export abstract class AbstractSafeSubscriber<T> extends AbstractSubscriber<T>
  implements SafeSubscriberLike<T> {
  readonly nextQueue: Array<T> = [];

  constructor(scheduler: SchedulerLike) {
    super(scheduler);
    this.add(_ => {
      scheduleDrainQueue(this);
    });
  }

  abstract onNotify(next: T): void;

  abstract onDispose(e?: Exception): void;

  notify(next: T): void {
    this.onNotify(next)
  }

  dispatch(next: T): void {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
    }
  }
}


class SafeSubscriberImpl<T> extends AbstractSafeSubscriber<T>
  implements SafeSubscriberLike<T> {

  constructor(readonly delegate: SubscriberLike<T>) {
    super(delegate);
    delegate.add(this);
  }

  onDispose(e?: Exception) {
    this.delegate.dispose(e);
  }

  onNotify(next: T): void {
    this.delegate.notify(next);
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
