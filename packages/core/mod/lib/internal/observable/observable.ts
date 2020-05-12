import { Operator, SideEffect } from "../../functions.ts";
import { SchedulerContinuationLike, schedule } from "../../scheduler.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";

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
