import { compose } from "@reactive-js/pipe";
import { VirtualTimeSchedulerLike } from "@reactive-js/scheduler";
import { reduce } from "./reduce";
import { toValue } from "./toValue";

const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

/**
 * Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, accumulating all
 * values emitted by `source` into an array.
 */
export const toArray = <T>(schedulerFactory: () => VirtualTimeSchedulerLike) =>
  compose(
    reduce<T, T[]>(toArrayReducer, (): T[] => []),
    toValue(schedulerFactory),
  );
