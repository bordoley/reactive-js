import {
  DisposableOrTeardown,
  dispose,
  addTeardown,
  addDisposableDisposeParentOnChildError,
} from "../../disposable";
import { Factory } from "../../functions";
import { isSome, none } from "../../option";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces";
import { observe } from "./observable";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous: boolean;
  
  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: Factory<DisposableOrTeardown | void>,
  ) {
    this.isSynchronous = src.isSynchronous;
  }

  observe(observer: ObserverLike<T>) {
    try {
      observe(this.src, observer);
      const disposable = this.f() || none;
      if (disposable instanceof Function) {
        addTeardown(observer, disposable);
      } else if (isSome(disposable)) {
        addDisposableDisposeParentOnChildError(observer, disposable);
      }
    } catch (cause) {
      dispose(observer, { cause });
    }
  }
}

/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
export const onSubscribe = <T>(
  f: Factory<DisposableOrTeardown | void>,
): ObservableOperator<T, T> => observable =>
  new OnSubscribeObservable(observable, f);
