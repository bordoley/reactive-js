import { OperatorLike, pipe } from "@reactive-js/pipe";
import {
  VirtualTimeSchedulerResourceLike,
  createVirtualTimeSchedulerResource,
} from "@reactive-js/schedulers";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { ErrorLike } from "@reactive-js/disposable";
import { subscribe } from "./subscribe";

class ForEachObserver<T> implements ObserverLike<T> {
  error: ErrorLike | undefined = undefined;

  constructor(readonly onNotify: (next: T) => void) {}

  onDispose(error?: ErrorLike) {
    this.error = error;
  }
}

export const forEach = <T>(
  onNotify: (next: T) => void,
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = createVirtualTimeSchedulerResource,
): OperatorLike<ObservableLike<T>, void> => observable => {
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
