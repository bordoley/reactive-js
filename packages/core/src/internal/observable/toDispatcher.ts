import { AbstractDisposable, add, dispose } from "../../disposable";
import { isSome } from "../../option";
import { AbstractSchedulerContinuation, schedule } from "../../scheduler";
import { SchedulerLike } from "../scheduler/interfaces";
import { DispatcherLike, SubscriberLike } from "./interfaces";

class SubscriberDelegatingDispatcherSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly dispatcher: SubscriberDelegatingDispatcher<T>) {
    super();
  }

  produce(scheduler: SchedulerLike) {
    const dispatcher = this.dispatcher;
    const nextQueue = dispatcher.nextQueue;

    while (nextQueue.length > 0 && !this.isDisposed) {
      const next = nextQueue.shift() as T;
      dispatcher.subscriber.notify(next);

      if (dispatcher.nextQueue.length > 0 && scheduler.shouldYield()) {
        schedule(scheduler, this);
        return;
      }
    }

    dispose(this);
  }
}

const scheduleDrainQueue = <T>(
  dispatcher: SubscriberDelegatingDispatcher<T>,
) => {
  if (dispatcher.nextQueue.length === 1) {
    const producer = new SubscriberDelegatingDispatcherSchedulerContinuation(
      dispatcher,
    );
    add(producer, e => {
      const error = e ?? dispatcher.error;
      if (isSome(error) || dispatcher.isDisposed) {
        dispose(dispatcher.subscriber as SubscriberLike<T>, error);
      }
    });
    schedule(dispatcher.subscriber, producer);
  }
};

class SubscriberDelegatingDispatcher<T> extends AbstractDisposable
  implements DispatcherLike<T> {
  readonly nextQueue: Array<T> = [];

  constructor(readonly subscriber: SubscriberLike<T>) {
    super();
    add(this, e => {
      if (this.nextQueue.length === 0) {
        dispose(subscriber, e);
      }
    });
    add(subscriber, this);
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
