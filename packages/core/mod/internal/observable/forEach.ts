import { Exception, dispose } from "../../disposable.ts";
import { Operator, pipe, Factory, SideEffect1 } from "../../functions.ts";
import { none, Option } from "../../option.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler.ts";
import { ObservableLike } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
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
  callback: SideEffect1<T>,
  schedulerFactory: Factory<VirtualTimeSchedulerLike> = createVirtualTimeScheduler,
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

  dispose(subscription);
  dispose(scheduler);

  const reifiedError = error;
  // FIXME: would rather use isSome(reifiedError) but TS is failing the check for some reason
  if (reifiedError !== none) {
    const { cause } = reifiedError as Exception;
    throw cause;
  }
};
