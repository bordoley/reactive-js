import { DisposableOrTeardown, dispose, add } from "../../disposable";
import { Factory } from "../../functions";
import { isSome, none } from "../../option";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: Factory<DisposableOrTeardown | void>,
  ) {}

  observe(observer: ObserverLike<T>) {
    try {
      this.src.observe(observer);
      const disposable = this.f() || none;
      if (isSome(disposable)) {
        add(observer, disposable);
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
