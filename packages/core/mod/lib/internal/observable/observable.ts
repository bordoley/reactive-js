import { Function, SideEffect } from "../../functions.ts";
import { SchedulerContinuationLike, schedule } from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: Function<
      ObserverLike<T>,
      SchedulerContinuationLike | SideEffect
    >,
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {}

  observe(observer: ObserverLike<T>) {
    const schedulerContinuation = this.factory(observer);
    schedule(observer, schedulerContinuation, this);
  }
}

export const createScheduledObservable = <T>(
  factory: Function<ObserverLike<T>, SchedulerContinuationLike | SideEffect>,
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

export const createDelayedScheduledObservable = <T>(
  factory: Function<ObserverLike<T>, SchedulerContinuationLike | SideEffect>,
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);
