import { none, Option, isSome } from "../../option.ts";
import { Operator, pipe } from "../../pipe.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { observe } from "./observe.ts";
import { Exception } from "../../disposable.ts";
import { subscribe } from "./subscribe.ts";

class ForEachObserver<T> implements ObserverLike<T> {
  error: Option<Exception> = none;

  constructor(readonly onNotify: (next: T) => void) {}

  onDispose(error?: Exception) {
    this.error = error;
  }
}

/**
 * Synchronously subscribes to the source using a `VirtualTimeSchedulerLike` scheduler,
 * invoking the onNotify callback for each item emitted by the source.
 *
 * @param onNotify callback to invoke for each item emitted by the source.
 *
 * @throws an error if the source is disposed with an error.
 */
export const forEach = <T>(
  onNotify: (next: T) => void,
  schedulerFactory: () => VirtualTimeSchedulerLike = createVirtualTimeScheduler,
): Operator<ObservableLike<T>, void> => observable => {
  const scheduler = schedulerFactory();
  const observer = new ForEachObserver<T>(onNotify);
  const subscription = pipe(
    observable,
    observe(observer),
    subscribe(scheduler),
  );

  scheduler.run();

  subscription.dispose();
  scheduler.dispose();

  const error = observer.error;
  if (isSome(error)) {
    const { cause } = error;
    throw cause;
  }
};
