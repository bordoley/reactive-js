import { AbstractDisposable } from "../../disposable.ts";
import { SubjectLike, SubscriberLike, DispatcherLike } from "./interfaces.ts";
import { toDispatcher } from "./toDispatcher.ts";
import { dispatch } from "./dispatcher.ts";

class SubjectImpl<T> extends AbstractDisposable implements SubjectLike<T> {
  private readonly subscribers: Set<DispatcherLike<T>> = new Set();
  private readonly replayed: T[] = [];

  readonly isSynchronous = false;

  constructor(private readonly replayCount: number) {
    super();
  }

  get subscriberCount() {
    return this.subscribers.size;
  }

  dispatch(next: T): void {
    if (!this.isDisposed) {
      const replayed = this.replayed;
      const replayCount = this.replayCount;

      if (replayCount > 0) {
        replayed.push(next);
        if (replayed.length > replayCount) {
          replayed.shift();
        }
      }

      for (const subscriber of this.subscribers) {
        dispatch(subscriber, next);
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = toDispatcher(subscriber);

    if (!this.isDisposed) {
      const subscribers = this.subscribers;
      subscribers.add(dispatcher);

      subscriber.add(() => {
        subscribers.delete(dispatcher);
      });
    }

    for (const next of this.replayed) {
      dispatch(dispatcher, next);
    }

    this.add(dispatcher);
  }
}

export const createSubject = <T>(replayCount = 0): SubjectLike<T> =>
  new SubjectImpl(replayCount);
