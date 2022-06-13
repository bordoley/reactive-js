import {
  DisposableOrTeardown,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  dispose,
} from "../disposable";
import { Factory, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { isSome, none } from "../option";
import { observe } from "./observer";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly type = this;
  readonly T = undefined as any;
  readonly isSynchronous: boolean;

  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: Factory<DisposableOrTeardown | void>,
  ) {
    this.isSynchronous = src.isSynchronous;
  }

  observe(observer: ObserverLike<T>) {
    try {
      pipe(this.src, observe(observer));
      const disposable = this.f() || none;
      if (disposable instanceof Function) {
        addTeardown(observer, disposable);
      } else if (isSome(disposable)) {
        addDisposableDisposeParentOnChildError(observer, disposable);
      }
    } catch (cause) {
      pipe(observer, dispose({ cause }));
    }
  }
}

/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
export const onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>): ObservableOperator<T, T> =>
  observable =>
    new OnSubscribeObservable(observable, f);
