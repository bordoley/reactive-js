import { AbstractSchedulerContinuation } from "../../scheduler";
import { alwaysFalse } from "../../functions";
import { DispatcherLike, SubscriberLike } from "./interfaces";
import { isSome } from "../../option";
import { AbstractDisposable } from "../../disposable";

class SubscriberDelegatingDispatcherSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly dispatcher: SubscriberDelegatingDispatcher<T>) {
    super();
  }

  produce(shouldYield?: () => boolean): number {
    const dispatcher = this.dispatcher;
    const nextQueue = dispatcher.nextQueue;

    shouldYield = shouldYield ?? alwaysFalse;

    while (nextQueue.length > 0 && !this.isDisposed) {
      const next = nextQueue.shift() as T;
      dispatcher.subscriber.notify(next);

      if (dispatcher.nextQueue.length > 0 && shouldYield()) {
        return 0;
      }
    }

    return -1;
  }
}

const scheduleDrainQueue = <T>(
  dispatcher: SubscriberDelegatingDispatcher<T>,
) => {
  if (dispatcher.nextQueue.length === 1) {
    const producer = new SubscriberDelegatingDispatcherSchedulerContinuation(
      dispatcher,
    );
    producer.add(e => {
      const error = e ?? dispatcher.error;
      if (isSome(error) || dispatcher.isDisposed) {
        (dispatcher.subscriber as SubscriberLike<T>).dispose(error);
      }
    });
    dispatcher.subscriber.schedule(producer);
  }
};

class SubscriberDelegatingDispatcher<T> extends AbstractDisposable
  implements DispatcherLike<T> {
  readonly nextQueue: Array<T> = [];

  constructor(readonly subscriber: SubscriberLike<T>) {
    super();
    this.add(e => {
      if (this.nextQueue.length === 0) {
        subscriber.dispose(e);
      }
    });
    subscriber.add(this);
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
export const toDispatcher = <T>(
  subscriber: SubscriberLike<T>,
): DispatcherLike<T> => new SubscriberDelegatingDispatcher(subscriber);
