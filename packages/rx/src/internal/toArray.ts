import { OperatorLike, pipe } from "@reactive-js/pipe";
import { ObservableLike } from "./interfaces";
import { reduce } from "./reduce";
import { toValue } from "./toValue";

const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

/**
 * Synchronously subscribes to the source using a `VirtualTimeSchedulerLike`, accumulating all
 * values emitted by the source into an array.
 */
export const toArray = <T>(): OperatorLike<
  ObservableLike<T>,
  readonly T[]
> => observable =>
  pipe(
    observable,
    reduce(toArrayReducer, (): T[] => []),
    toValue(),
  );
