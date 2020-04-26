import { AbstractSchedulerContinuation } from "../../scheduler.ts";
import { alwaysFalse } from "./functions.ts";
import { SafeSubscriberLike, SubscriberLike } from "./interfaces.ts";
import { isSome } from "../../option.ts";
import { AbstractSubscriber, assertSubscriberNotifyInContinuation } from "./subscriber.ts";

class SafeSubscriberSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly subscriber: SafeSubscriberImpl<T>) {
    super();
  }

  produce(shouldYield?: () => boolean): number {
    const subscriber = this.subscriber;
    const nextQueue = subscriber.nextQueue;

    shouldYield = shouldYield ?? alwaysFalse;

    while (nextQueue.length > 0 && !this.isDisposed) {
      const next = nextQueue.shift() as T;

      // We're scheduled on the subscriber's delegate not the subscriber
      (subscriber.scheduler as SubscriberLike<T>).notify(next);

      if (subscriber.nextQueue.length > 0 && shouldYield()) {
        return 0;
      }
    }

    return -1;
  }
}

const scheduleDrainQueue = <T>(subscriber: SafeSubscriberImpl<T>) => {
  if (subscriber.nextQueue.length === 1) {
    const producer = new SafeSubscriberSchedulerContinuation(subscriber);
    producer.add(e => {
      const error = e ?? subscriber.error;
      if (isSome(error) || subscriber.isDisposed) {
        (subscriber.scheduler as SubscriberLike<T>).dispose();
      }
    })
    subscriber.scheduler.schedule(producer);
  }
};

class SafeSubscriberImpl<T> extends AbstractSubscriber<T>
  implements SafeSubscriberLike<T> {
  readonly nextQueue: Array<T> = [];

  constructor(subscriber: SubscriberLike<T>) {
    super(subscriber);
    this.add(e => {
      if (this.nextQueue.length === 0) {
        subscriber.dispose(e);
      }
    });
  }

  notify(next: T): void {
    assertSubscriberNotifyInContinuation(this);
    (this.scheduler as SubscriberLike<T>).notify(next);
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
