import { compose } from "../../pipe.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler.ts";
import { reduce } from "./reduce.ts";
import { toValue } from "./toValue.ts";

const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

/**
 * Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, accumulating all
 * values emitted by `source` into an array.
 */
export const toArray = <T>(
  schedulerFactory: () => VirtualTimeSchedulerLike = createVirtualTimeScheduler,
) =>
  compose(
    reduce<T, T[]>(toArrayReducer, (): T[] => []),
    toValue(schedulerFactory),
  );
