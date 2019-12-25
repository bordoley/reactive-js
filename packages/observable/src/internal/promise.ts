import {
  ObservableLike,
  ObserverLike,
  subscribe,
  ErrorLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { observe } from "./observe";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import {
  DisposableLike,
  createSerialDisposable,
} from "@reactive-js/disposable";

class ToPromiseObserver<T> implements ObserverLike<T> {
  private result: [T] | undefined = undefined;

  constructor(
    private readonly subscription: DisposableLike,
    private readonly resolve: (value?: T | PromiseLike<T>) => void,
    private readonly reject: (reason?: any) => void,
  ) {}

  onNext(x: T) {
    const result = this.result;

    if (result === undefined) {
      this.result = [x];
    } else {
      result[0] = x;
    }
  }

  onComplete(err?: ErrorLike) {
    const result = this.result;

    this.subscription.dispose();

    if (err !== undefined) {
      const { cause } = err;
      this.reject(cause);
    } else if (result === undefined) {
      this.reject(new Error("Observable completed without producing a value"));
    } else {
      const value = result[0];
      this.resolve(value);
    }
  }
}

export const toPromise = <T>(
  scheduler: SchedulerLike,
): OperatorLike<ObservableLike<T>, Promise<T>> => observable =>
  new Promise((resolve, reject) => {
    const subscription = createSerialDisposable();
    const observer = new ToPromiseObserver(subscription, resolve, reject);

    subscription.disposable = pipe(
      observable,
      observe(observer),
      subscribe(scheduler),
    );
  });
