import { Exception } from "../../disposable";
import { none, Option, isSome } from "../../option";
import { pipe } from "../../pipe";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";

class ToValueObserver<T> implements ObserverLike<T> {
  private _result: Option<T> = none;
  private hasResult = false;
  private error: Option<Exception> = none;

  onNotify(next: T) {
    this._result = next;
    this.hasResult = true;
  }

  onDispose(error?: Exception) {
    this.error = error;
  }

  get result(): T {
    const error = this.error;
    if (isSome(error)) {
      const { cause } = error;
      throw cause;
    }

    if (!this.hasResult) {
      throw new Error("Observable did not produce any values");
    }
    return this._result as T;
  }
}

/**
 * Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, returning
 * the last value produced.
 */
export const toValue = (
  schedulerFactory: () => VirtualTimeSchedulerLike = createVirtualTimeScheduler,
) => <T>(source: ObservableLike<T>): T => {
  const scheduler = schedulerFactory();
  const observer = new ToValueObserver<T>();
  const subscription = pipe(source, observe(observer), subscribe(scheduler));

  scheduler.run();

  subscription.dispose();
  scheduler.dispose();

  return observer.result;
};
