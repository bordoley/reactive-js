import { SideEffect1 } from "../functions";
import { ObservableLike } from "../observable";
import { AbstractObservable } from "./observable";
import { Observer } from "./observer";

class CreateObservable<T> extends AbstractObservable<T> {
  constructor(private readonly f: SideEffect1<Observer<T>>) {
    super();
  }

  sink(observer: Observer<T>) {
    try {
      this.f(observer);
    } catch (cause) {
      observer.dispose({ cause });
    }
  }
}

export const createObservable = <T>(
  f: SideEffect1<Observer<T>>,
): ObservableLike<T> => new CreateObservable(f);
