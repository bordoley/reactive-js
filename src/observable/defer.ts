import { addTo } from "../disposable";
import { Factory, SideEffect1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer, scheduler } from "../observer";
import { schedule } from "../scheduler";
import { createObservable } from "./createObservable";

export const defer = <T>(
  factory: Factory<SideEffect1<Observer<T>>>,
  options?: { readonly delay?: number },
): ObservableLike<T> =>
  createObservable(observer => {
    const sideEffect = factory();
    const callback = () => sideEffect(observer);
    pipe(scheduler(observer), schedule(callback, options), addTo(observer));
  });
