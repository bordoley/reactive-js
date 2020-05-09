import { pipe } from "../../functions.ts";
import { SchedulerContinuationLike, schedule } from "../../scheduler.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: (
      subscriber: SubscriberLike<T>,
    ) => SchedulerContinuationLike | (() => void),
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const schedulerContinuation = this.factory(subscriber);
    
    if (schedulerContinuation instanceof Function) {
      // Note: no need to add the returned disposable, since
      // subscriber already adds any callbacks scheduled on it.
      pipe(subscriber, schedule(schedulerContinuation, this));
    } else {
      subscriber.schedule(schedulerContinuation, this);
    }
  }
}

export const createScheduledObservable = <T>(
  factory: (
    subscriber: SubscriberLike<T>,
  ) => SchedulerContinuationLike | (() => void),
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

export const createDelayedScheduledObservable = <T>(
  factory: (
    subscriber: SubscriberLike<T>,
  ) => SchedulerContinuationLike | (() => void),
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);
