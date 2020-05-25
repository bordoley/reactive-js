import { addOnDisposedWithError } from "../../disposable.ts";
import { SideEffect1, Factory } from "../../functions.ts";
import { schedule } from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";

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

export const deferSynchronous = <T>(
  factory: Factory<SideEffect1<ObserverLike<T>>>,
): ObservableLike<T> => new ScheduledObservable(factory, true, 0);

export const defer = <T>(
  factory: Factory<SideEffect1<ObserverLike<T>>>,
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
  const { delay = 0 } = options;
  return new ScheduledObservable(factory, false, delay);
};

export const observe = <T>(
  observable: ObservableLike<T>,
  observer: ObserverLike<T>,
) => observable.observe(observer);

export const observeWith = <T>(
  observer: ObserverLike<T>,
): SideEffect1<ObservableLike<T>> => observable =>
  observe(observable, observer);
