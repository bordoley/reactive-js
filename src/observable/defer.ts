import { addOnDisposedWithError } from "../disposable";
import { Factory, SideEffect1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { schedule } from "../scheduler";
import { AbstractObservable } from "./observable";
import { Observer } from "./observer";

class DeferObservable<T> extends AbstractObservable<T> {
  constructor(
    private readonly f: Factory<SideEffect1<Observer<T>>>,
    readonly isSynchronous: boolean,
    readonly delay: number,
  ) {
    super();
  }

  sink(observer: Observer<T>) {
    const sideEffect = this.f();
    const callback = () => sideEffect(observer);
    const schedulerSubscription = pipe(observer, schedule(callback, this));
    addOnDisposedWithError(schedulerSubscription, observer);
  }
}

export const deferSynchronous = <T>(
  factory: Factory<SideEffect1<Observer<T>>>,
): ObservableLike<T> => new DeferObservable(factory, true, 0);

export const defer = <T>(
  factory: Factory<SideEffect1<Observer<T>>>,
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
  const { delay = 0 } = options;
  return new DeferObservable(factory, false, delay);
};
