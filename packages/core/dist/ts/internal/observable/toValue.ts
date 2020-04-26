import { Exception } from "../../disposable.ts";
import { none, Option, isSome } from "../../option.ts";
import { pipe, Operator } from "../../pipe.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
  SchedulerLike,
} from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { observe } from "./observe.ts";
import { subscribe } from "./subscribe.ts";

class ToValueObserver<T> implements ObserverLike<T> {
  result: Option<T> = none;
  hasResult = false;

  onNotify(next: T) {
    this.result = next;
    this.hasResult = true;
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

  let error: Option<Exception> = none;
  const subscription = pipe(
    source,
    observe(observer),
    subscribe(scheduler),
  ).add(e => {
    error = e;
  });

  scheduler.run();

  subscription.dispose();
  scheduler.dispose();

  const reifiedError: Option<Exception> = error;
  // FIXME: would rather use isSome(reifiedError) but TS is failing the check for some reason
  if (reifiedError !== none) {
    const { cause } = reifiedError as Exception;
    throw cause;
  }

  if (!observer.hasResult) {
    throw new Error("Observable did not produce any values");
  }

  return observer.result as T;
};

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
    const observer = new ToValueObserver();
    pipe(observable, observe(observer), subscribe(scheduler)).add(err => {
      if (isSome(err)) {
        const { cause } = err;
        reject(cause);
      } else if (!observer.hasResult) {
        reject(new Error("Observable completed without producing a value"));
      } else {
        resolve(observer.result as T);
      }
    });
  });
