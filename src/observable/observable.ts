import { addOnDisposedWithError } from "../disposable";
import { Function1, SideEffect, pipe } from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { schedule } from "../scheduler";

class ScheduledObservable<T> implements ObservableLike<T> {
  readonly type = this;
  readonly T = undefined as any;

  constructor(
    private readonly f: Function1<ObserverLike<T>, SideEffect>,
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {}

  observe(observer: ObserverLike<T>) {
    const callback = this.f(observer);
    const schedulerSubscription = pipe(observer, schedule(callback, this));
    addOnDisposedWithError(schedulerSubscription, observer);
  }
}

export const deferSynchronous = <T>(
  factory: Function1<ObserverLike<T>, SideEffect>,
): ObservableLike<T> => new ScheduledObservable(factory, true, 0);

export const defer = <T>(
  factory: Function1<ObserverLike<T>, SideEffect>,
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
  const { delay = 0 } = options;
  return new ScheduledObservable(factory, false, delay);
};
