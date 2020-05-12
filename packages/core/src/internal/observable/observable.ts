import { pipe, Operator, SideEffect } from "../../functions";
import { SchedulerContinuationLike, schedule } from "../../scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: Operator<
      SubscriberLike<T>,
      SchedulerContinuationLike | SideEffect
    >,
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
  factory: Operator<SubscriberLike<T>, SchedulerContinuationLike | SideEffect>,
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

export const createDelayedScheduledObservable = <T>(
  factory: Operator<SubscriberLike<T>, SchedulerContinuationLike | SideEffect>,
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);
