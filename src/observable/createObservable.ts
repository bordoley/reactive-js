import { dispose } from "../disposable";
import { SideEffect1, newInstance, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { CreateSource } from "../source";
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

export const createT: CreateSource<ObservableLike<unknown>> = {
  create: createObservable,
};
