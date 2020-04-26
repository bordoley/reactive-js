import { none, Option } from "../../option.ts";
import { Operator, pipe } from "../../pipe.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler.ts";
import { ObservableLike } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { Exception } from "../../disposable.ts";
import { subscribe } from "./subscribe.ts";

/**
 * Synchronously subscribes to the source using a `VirtualTimeSchedulerLike` scheduler,
 * invoking the onNotify callback for each item emitted by the source.
 *
 * @param onNotify callback to invoke for each item emitted by the source.
 *
 * @throws an error if the source is disposed with an error.
 */
export const forEach = <T>(
  callback: (next: T) => void,
  schedulerFactory: () => VirtualTimeSchedulerLike = createVirtualTimeScheduler,
): Operator<ObservableLike<T>, void> => observable => {
  const scheduler = schedulerFactory();

  let error: Option<Exception> = none;
  const subscription = pipe(
    observable,
    onNotify(callback),
    subscribe(scheduler),
  ).add(e => {
    error = e;
  });

  scheduler.run();

  subscription.dispose();
  scheduler.dispose();

  const reifiedError = error
  // FIXME: would rather use isSome(reifiedError) but TS is failing the check for some reason
  if (reifiedError !== none) {
    const { cause } = reifiedError as Exception;
    throw cause;
  }
};
