import {
  DisposableOrTeardown,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  dispose,
} from "../disposable";
import { Factory, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { isSome, none } from "../option";
import { AbstractSource, sinkInto } from "../source";
import { Observer } from "./observer";

class OnSubscribeObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T>
{
  readonly isSynchronous?: boolean;

  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: Factory<DisposableOrTeardown | void>,
  ) {
    super();
    this.isSynchronous = src.isSynchronous;
  }

  sink(observer: Observer<T>) {
    try {
      pipe(this.src, sinkInto(observer));
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
