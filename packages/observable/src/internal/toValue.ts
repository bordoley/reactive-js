import { pipe } from "@reactive-js/pipe";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "@reactive-js/scheduler";
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
    const error = this.error;
    if (error !== undefined) {
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
