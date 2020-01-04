import { OperatorLike, pipe } from "@reactive-js/pipe";
import { VirtualTimeSchedulerResourceLike } from "@reactive-js/schedulers";
import { ObservableLike, ObserverLike } from "./interfaces";
import { iterate } from "./iterate";
import { observe } from "./observe";
import { ErrorLike } from "@reactive-js/disposable";

class ToValueObserver<T> implements ObserverLike<T> {
  private _result: T | undefined = undefined;
  private hasResult = false;
  private error: ErrorLike | undefined = undefined;

  onNext(next: T) {
    this._result = next;
    this.hasResult = true;
  }

  onComplete(error?: ErrorLike) {
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

export const toValue = <T>(
  schedulerFactory?: () => VirtualTimeSchedulerResourceLike,
): OperatorLike<ObservableLike<T>, T> => observable => {
  const observer = new ToValueObserver<T>();

  pipe(observable, observe(observer), iterate(schedulerFactory));

  return observer.result;
};
