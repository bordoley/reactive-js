import { OperatorLike, pipe } from "@reactive-js/pipe";
import {
  createVirtualTimeSchedulerResource,
  VirtualTimeSchedulerResourceLike,
} from "@reactive-js/schedulers";
import { ObservableLike } from "./interfaces";
import { subscribe } from "./subscribe";

/** @ignore */
export const iterate = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = createVirtualTimeSchedulerResource,
): OperatorLike<ObservableLike<T>, void> => observable => {
  const scheduler = schedulerFactory();

  const subscription = pipe(observable, subscribe(scheduler));
  scheduler.run();

  subscription.dispose();
  scheduler.dispose();
};
