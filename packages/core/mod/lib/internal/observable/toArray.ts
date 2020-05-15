import { Factory } from "../../functions.ts";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../../scheduler.ts";
import { reduce } from "./reduce.ts";

const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

/**
 * Synchronously subscribes to `source` using a `VirtualTimeSchedulerLike`, accumulating all
 * values emitted by `source` into an array.
 */
export const toArray = <T>(
  schedulerFactory: Factory<
    VirtualTimeSchedulerLike
  > = createVirtualTimeScheduler,
) => reduce<T, T[]>(toArrayReducer, (): T[] => [], schedulerFactory);
