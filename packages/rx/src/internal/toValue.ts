import { OperatorLike, pipe } from "@reactive-js/pipe";
import { VirtualTimeSchedulerResourceLike } from "@reactive-js/schedulers";
import { ObservableLike, ErrorLike, ObserverLike } from "./interfaces";
import { iterate } from "./iterate";
import { observe } from "./observe";

class ToValueObserver<T> implements ObserverLike<T> {
  private _result: [T] | undefined = undefined;
  private error: ErrorLike | undefined = undefined;

  onNext(x: T) {
    const result = this._result;

    if (result === undefined) {
      this._result = [x];
    } else {
      result[0] = x;
    }
  }

  onComplete(x?: ErrorLike) {
    this.error = x;
  }

  get result(): T {
    if (this.error !== undefined) {
      const { cause } = this.error;
      throw cause;
    }

    const result = this._result;

    if (result === undefined) {
      throw new Error("Observable did not produce any values");
    }
    return result[0];
  }
}

export const toValue = <T>(
  schedulerFactory?: () => VirtualTimeSchedulerResourceLike,
): OperatorLike<ObservableLike<T>, T> => observable => {
  const observer = new ToValueObserver<T>();

  pipe(observable, observe(observer), iterate(schedulerFactory));

  return observer.result;
};