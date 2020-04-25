import {
  DisposableLike,
  createSerialDisposable,
  Exception,
} from "../../disposable.ts";
import { none, Option, isSome } from "../../option.ts";
import { pipe, Operator } from "../../pipe.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { observe } from "./observe.ts";
import { subscribe } from "./subscribe.ts";
import { takeFirst } from "./takeFirst.ts";

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
