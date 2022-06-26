import { addToDisposeOnChildError } from "../disposable";
import { Factory, SideEffect1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { schedule } from "../scheduler";
import { createObservable } from "./createObservable";
import { Observer } from "./observer";

export const defer = <T>(
  factory: Factory<SideEffect1<Observer<T>>>,
  options?: { readonly delay?: number },
): ObservableLike<T> =>
  createObservable(observer => {
    const sideEffect = factory();
    const callback = () => sideEffect(observer);
    pipe(
      observer.scheduler,
      schedule(callback, options),
      addToDisposeOnChildError(observer),
    );
  });
