import { Function1, SideEffect } from "../../functions";
import { SchedulerContinuationLike, schedule } from "../../scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: Function1<
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
  factory: Function1<ObserverLike<T>, SchedulerContinuationLike | SideEffect>,
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

export const createDelayedScheduledObservable = <T>(
  factory: Function1<ObserverLike<T>, SchedulerContinuationLike | SideEffect>,
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);
