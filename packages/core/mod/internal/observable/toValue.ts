import { Exception, dispose } from "../../disposable.ts";
import { pipe, Factory } from "../../functions.ts";
import { none, Option } from "../../option.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler.ts";
import { ObservableLike } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

/**
 * Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, returning
 * the last value produced.
 */
export const toValue = (
  schedulerFactory: Factory<VirtualTimeSchedulerLike> = createVirtualTimeScheduler,
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
