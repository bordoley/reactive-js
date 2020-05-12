import { Operator, SideEffect } from "../../functions";
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
    schedule(subscriber, schedulerContinuation, this);
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
