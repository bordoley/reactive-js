import {
  DisposableLike,
  createSerialDisposable,
  ErrorLike,
} from "@reactive-js/disposable";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";

class ToPromiseObserver<T> implements ObserverLike<T> {
  private hasResult = false;
  private result: T | undefined = undefined;

  constructor(
    private readonly subscription: DisposableLike,
    private readonly resolve: (value?: T | PromiseLike<T>) => void,
    private readonly reject: (reason?: any) => void,
  ) {}

  onNext(next: T) {
    this.result = next;
    this.hasResult = true;
  }

  onDispose(err?: ErrorLike) {
    this.subscription.dispose();

    if (err !== undefined) {
      const { cause } = err;
      this.reject(cause);
    } else if (!this.hasResult) {
      this.reject(new Error("Observable completed without producing a value"));
    } else {
      this.resolve(this.result);
    }
  }
}

export const toPromise = <T>(
  scheduler: SchedulerLike,
): OperatorLike<ObservableLike<T>, Promise<T>> => observable =>
  new Promise((resolve, reject) => {
    const subscription = createSerialDisposable();
    const observer = new ToPromiseObserver(subscription, resolve, reject);

    subscription.inner = pipe(
      observable,
      observe(observer),
      subscribe(scheduler),
    );
  });
