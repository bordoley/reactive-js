import { addTo } from "../disposable";
import { Factory, SideEffect1, pipe } from "../functions";
import { Defer } from "../liftable";
import { ObservableLike } from "../observable";
import { Observer, getScheduler } from "../observer";
import { sinkInto } from "../reactive";
import { schedule } from "../scheduler";
import { createObservable } from "./createObservable";

export function defer<T>(
  factory: Factory<SideEffect1<Observer<T>>>,
  options?: { readonly delay?: number },
): ObservableLike<T>;
export function defer<T>(
  factory: Factory<ObservableLike<T>>,
): ObservableLike<T>;
export function defer<T>(
  factory: Factory<ObservableLike<T> | SideEffect1<Observer<T>>>,
  options?: { readonly delay?: number },
): ObservableLike<T> {
  return createObservable(observer => {
    const sideEffect = factory();
    if (typeof sideEffect === "function") {
      const callback = () => sideEffect(observer);
      pipe(
        observer,
        getScheduler,
        schedule(callback, options),
        addTo(observer),
      );
    } else {
      pipe(sideEffect, sinkInto(observer));
    }
  });
}

export const deferT: Defer<ObservableLike<unknown>> = {
  defer,
};
