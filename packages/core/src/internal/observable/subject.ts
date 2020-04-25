import { SchedulerLike } from "../../scheduler";
import { SafeSubscriberLike, SubjectLike, SubscriberLike } from "./interfaces";
import {
  AbstractSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { toSafeSubscriber } from "./toSafeSubscriber";

class SubjectImpl<T> extends AbstractSubscriber<T> implements SubjectLike<T> {
  private readonly subscribers: Set<SafeSubscriberLike<T>> = new Set();
  private readonly replayed: T[] = [];

  readonly isSynchronous = false;

  constructor(scheduler: SchedulerLike, private readonly replayCount: number) {
    super(scheduler);
  }

  get subscriberCount() {
    return this.subscribers.size;
  }

  notify(next: T): void {
    assertSubscriberNotifyInContinuation(this);

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
        subscriber.dispatch(next);
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const safeSubscriber = toSafeSubscriber(subscriber);

    if (!this.isDisposed) {
      const subscribers = this.subscribers;
      subscribers.add(safeSubscriber);

      safeSubscriber.add(() => {
        subscribers.delete(safeSubscriber);
      });
    }

    for (const next of this.replayed) {
      safeSubscriber.dispatch(next);
    }

    this.add(safeSubscriber);
  }
}

/**
 * Returns a new `SubjectLike` instance.
 *
 * @param scheduler The scheduler that should be used by sources to notify the `SubjectLike` instance.
 * @param replayCount The number of events that should be replayed when the `SubjectLike` instance
 * is subscribed to.
 */
export const createSubject = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): SubjectLike<T> => new SubjectImpl(scheduler, replayCount);
