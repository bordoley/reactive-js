import {
  ObservableLike,
  ObserverLike,
  subscribe,
  createObservable,
  ErrorLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { observe } from "./observe";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import {
  createDisposable,
  DisposableLike,
  createSerialDisposable,
} from "@reactive-js/disposable";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (observer: ObserverLike<T>) => {
    const disposable = createDisposable();

    factory()
      .then(
        v => {
          if (!disposable.isDisposed) {
            observer.next(v);
            observer.complete();
          }
        },
        cause => {
          if (!disposable.isDisposed) {
            observer.complete({ cause });
          }
        },
      )
      .finally(() => disposable.dispose());

    return disposable;
  };

  return createObservable(onSubscribe);
};

class ToPromiseObserver<T> implements ObserverLike<T> {
  private result: [T] | undefined = undefined;

  private readonly subscription: DisposableLike;
  private readonly resolve: (value?: T | PromiseLike<T>) => void;
  private readonly reject: (reason?: any) => void;

  constructor(
    subscription: DisposableLike,
    resolve: (value?: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void,
  ) {
    this.subscription = subscription;
    this.resolve = resolve;
    this.reject = reject;
  }

  next(x: T) {
    if (this.result === undefined) {
      this.result = [x];
    } else {
      this.result[0] = x;
    }
  }

  complete(err?: ErrorLike) {
    this.subscription.dispose();
    if (err !== undefined) {
      const { cause } = err;
      this.reject(cause);
    } else if (this.result === undefined) {
      this.reject(new Error("Observable completed without producing a value"));
    } else {
      const value = this.result[0];
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
