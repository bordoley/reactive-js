import { Function1, SideEffect1 } from "../../functions.ts";
import { YieldableLike, schedule } from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { add, disposeOnError } from "../../disposable.ts";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: Function1<
      ObserverLike<T>,
      SideEffect1<YieldableLike>
    >,
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {}

  observe(observer: ObserverLike<T>) {
    const schedulerContinuation = this.factory(observer);
    add(schedule(observer, schedulerContinuation, this), disposeOnError(observer));
  }
}

export const createScheduledObservable = <T>(
  factory: Function1<ObserverLike<T>, SideEffect1<YieldableLike>>,
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

export const createDelayedScheduledObservable = <T>(
  factory: Function1<ObserverLike<T>, SideEffect1<YieldableLike>>,
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);
