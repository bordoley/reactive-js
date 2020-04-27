import { SchedulerContinuationLike, schedule } from "../../scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { pipe } from "../../functions";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: (
      subscriber: SubscriberLike<T>,
    ) => SchedulerContinuationLike | (() => void),
    readonly isSynchronous: boolean,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const schedulerContinuation = this.factory(subscriber);
    if (schedulerContinuation instanceof Function) {
      // Note: no need to add the returned disposable, since
      // subscriber already adds any callbacks scheduled on it.
      pipe(subscriber, schedule(schedulerContinuation, this.delay));
    } else {
      subscriber.schedule(schedulerContinuation, this.delay);
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
