import {
  DisposableLike,
  createSerialDisposable,
  Exception,
} from "@reactive-js/disposable";
import { none, Option, isSome } from "@reactive-js/option";
import { pipe, Operator } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { takeFirst } from "./takeFirst";

class ToPromiseObserver<T> implements ObserverLike<T> {
  private hasResult = false;
  private result: Option<T> = none;

  constructor(
    private readonly subscription: DisposableLike,
    private readonly resolve: (value?: T | PromiseLike<T>) => void,
    private readonly reject: (reason?: any) => void,
  ) {}

  onNotify(next: T) {
    this.result = next;
    this.hasResult = true;
  }

  onDispose(err?: Exception) {
    this.subscription.dispose();

    if (isSome(err)) {
      const { cause } = err;
      this.reject(cause);
    } else if (!this.hasResult) {
      this.reject(new Error("Observable completed without producing a value"));
    } else {
      this.resolve(this.result);
    }
  }
}

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise = <T>(
  scheduler: SchedulerLike,
): Operator<ObservableLike<T>, Promise<T>> => observable =>
  new Promise((resolve, reject) => {
    const subscription = createSerialDisposable();
    const observer = new ToPromiseObserver(subscription, resolve, reject);

    subscription.inner = pipe(
      observable,
      takeFirst(),
      observe(observer),
      subscribe(scheduler),
    );
  });
