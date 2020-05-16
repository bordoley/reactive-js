import { AbstractDisposable, add, dispose } from "../../disposable";
import { isSome } from "../../option";
import { AbstractSchedulerContinuation, schedule } from "../../scheduler";
import { SchedulerLike } from "../scheduler/interfaces";
import { DispatcherLike, ObserverLike } from "./interfaces";

class ObserverDelegatingDispatcherSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly dispatcher: ObserverDelegatingDispatcher<T>) {
    super();
  }

  continueUnsafe(scheduler: SchedulerLike) {
    const dispatcher = this.dispatcher;
    const nextQueue = dispatcher.nextQueue;

    while (nextQueue.length > 0 && !this.isDisposed) {
      const next = nextQueue.shift() as T;
      dispatcher.observer.notify(next);

      if (dispatcher.nextQueue.length > 0 && scheduler.shouldYield()) {
        schedule(scheduler, this);
        return;
      }
    }

    dispose(this);
  }
}

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (dispatcher.nextQueue.length === 1) {
    const producer = new ObserverDelegatingDispatcherSchedulerContinuation(
      dispatcher,
    );
    add(producer, e => {
      const error = e ?? dispatcher.error;
      if (isSome(error) || dispatcher.isDisposed) {
        dispose(dispatcher.observer as ObserverLike<T>, error);
      }
    });
    schedule(dispatcher.observer, producer);
  }
};

class ObserverDelegatingDispatcher<T> extends AbstractDisposable
  implements DispatcherLike<T> {
  readonly nextQueue: Array<T> = [];

  constructor(readonly observer: ObserverLike<T>) {
    super();
    add(this, e => {
      if (this.nextQueue.length === 0) {
        dispose(observer, e);
      }
    });
    add(observer, this);
  }

  dispatch(next: T) {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
    }
  }
}

/**
 * Returns a `SafeObserverLike` that delegates to the provided observer.
 *
 * @param observer The `ObserverLike` instance to wrap in a `SafeObserverLike`.
 */
export const toDispatcher = <T>(observer: ObserverLike<T>): DispatcherLike<T> =>
  new ObserverDelegatingDispatcher(observer);
