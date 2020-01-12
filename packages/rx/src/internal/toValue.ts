import { OperatorLike, pipe } from "@reactive-js/pipe";
import { createVirtualTimeScheduler } from "@reactive-js/schedulers";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { ErrorLike } from "@reactive-js/disposable";
import { subscribe } from "./subscribe";

class ToValueObserver<T> implements ObserverLike<T> {
  private _result: T | undefined = undefined;
  private hasResult = false;
  private error: ErrorLike | undefined = undefined;

  onNotify(next: T) {
    this._result = next;
    this.hasResult = true;
  }

  onDispose(error?: ErrorLike) {
    this.error = error;
  }

  get result(): T {
    if (this.error !== undefined) {
      const { cause } = this.error;
      throw cause;
    }

    if (!this.hasResult) {
      throw new Error("Observable did not produce any values");
    }
    return this._result as T;
  }
}

/**
 * Synchronously subscribes to the source using a `VirtualTimeSchedulerLike`, returning
 * the last value produced by the source.
 */
export const toValue = <T>(): OperatorLike<
  ObservableLike<T>,
  T
> => observable => {
  const scheduler = createVirtualTimeScheduler();
  const observer = new ToValueObserver<T>();
  const subscription = pipe(
    observable,
    observe(observer),
    subscribe(scheduler),
  );

  scheduler.run();

  subscription.dispose();
  scheduler.dispose();

  return observer.result;
};
