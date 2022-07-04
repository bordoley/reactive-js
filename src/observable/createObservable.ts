import { dispose } from "../disposable";
import { SideEffect1, newInstance, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { CreateReactiveContainer } from "../reactive";
import { AbstractObservable } from "./observable";

class CreateObservable<T> extends AbstractObservable<T> {
  constructor(private readonly f: SideEffect1<Observer<T>>) {
    super();
  }

  sink(observer: Observer<T>) {
    try {
      this.f(observer);
    } catch (cause) {
      pipe(observer, dispose({ cause }));
    }
  }
}

export const createObservable = <T>(
  f: SideEffect1<Observer<T>>,
): ObservableLike<T> => newInstance(CreateObservable, f);

export const createT: CreateReactiveContainer<ObservableLike<unknown>> = {
  create: createObservable,
};
