import { Exception, dispose } from "../../disposable";
import { pipe, Factory } from "../../functions";
import { none, Option } from "../../option";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler";
import { ObservableLike } from "./interfaces";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

/**
 * Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, returning
 * the last value produced.
 */
export const toValue = (
  schedulerFactory: Factory<
    VirtualTimeSchedulerLike
  > = createVirtualTimeScheduler,
) => <T>(source: ObservableLike<T>): T => {
  const scheduler = schedulerFactory();

  let error: Option<Exception> = none;
  let result: Option<T> = none;
  let hasResult = false;

  const subscription = pipe(
    source,
    onNotify((next: T) => {
      result = next;
      hasResult = true;
    }),
    subscribe(scheduler),
  ).add(e => {
    error = e;
  });

  scheduler.run();

  dispose(subscription);
  dispose(scheduler);

  const reifiedError: Option<Exception> = error;
  // FIXME: would rather use isSome(reifiedError) but TS is failing the check for some reason
  if (reifiedError !== none) {
    const { cause } = reifiedError as Exception;
    throw cause;
  }

  if (!hasResult) {
    throw new Error("Observable did not produce any values");
  }

  return (result as unknown) as T;
};
