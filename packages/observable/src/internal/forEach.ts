import { Operator, pipe } from "@reactive-js/pipe";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "@reactive-js/scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { Exception } from "@reactive-js/disposable";
import { subscribe } from "./subscribe";

class ForEachObserver<T> implements ObserverLike<T> {
  error: Exception | undefined = undefined;

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
  if (error !== undefined) {
    const { cause } = error;
    throw cause;
  }
};
