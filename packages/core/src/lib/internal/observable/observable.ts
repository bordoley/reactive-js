import { addOnDisposedWithError } from "../../disposable";
import { SideEffect1, Factory } from "../../functions";
import { schedule } from "../../scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";

class ScheduledObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly f: Factory<SideEffect1<ObserverLike<T>>>,
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {}

  observe(observer: ObserverLike<T>) {
    const callback = this.f();
    const schedulerSubscription = schedule(observer, callback, this);
    addOnDisposedWithError(schedulerSubscription, observer);
  }
}

export const createScheduledObservable = <T>(
  factory: Factory<SideEffect1<ObserverLike<T>>>,
  isSynchronous: boolean,
): ObservableLike<T> => new ScheduledObservable(factory, isSynchronous, 0);

export const createDelayedScheduledObservable = <T>(
  factory: Factory<SideEffect1<ObserverLike<T>>>,
  delay: number,
): ObservableLike<T> => new ScheduledObservable(factory, false, delay);

export const observe = <T>(
  observable: ObservableLike<T>,
  observer: ObserverLike<T>,
) => observable.observe(observer);

export const observeWith = <T>(
  observer: ObserverLike<T>,
): SideEffect1<ObservableLike<T>> => observable =>
  observe(observable, observer);
