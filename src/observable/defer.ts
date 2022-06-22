import { addOnDisposedWithError } from "../disposable";
import { Function1, SideEffect, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { schedule } from "../scheduler";
import { AbstractSource } from "../source";
import { Observer } from "./observer";

class DeferObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T>
{
  constructor(
    private readonly f: Function1<Observer<T>, SideEffect>,
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {
    super();
  }

  sink(observer: Observer<T>) {
    const callback = this.f(observer);
    const schedulerSubscription = pipe(observer, schedule(callback, this));
    addOnDisposedWithError(schedulerSubscription, observer);
  }
}

export const deferSynchronous = <T>(
  factory: Function1<Observer<T>, SideEffect>,
): ObservableLike<T> => new DeferObservable(factory, true, 0);

export const defer = <T>(
  factory: Function1<Observer<T>, SideEffect>,
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
  const { delay = 0 } = options;
  return new DeferObservable(factory, false, delay);
};
