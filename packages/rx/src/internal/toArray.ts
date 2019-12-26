import { OperatorLike, pipe } from "@reactive-js/pipe";
import { VirtualTimeSchedulerResourceLike } from "@reactive-js/schedulers";
import { ObservableLike } from "./interfaces";
import { reduce } from "./reduce";
import { toValue } from "./toValue";

const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

export const toArray = <T>(
  schedulerFactory?: () => VirtualTimeSchedulerResourceLike,
): OperatorLike<ObservableLike<T>, readonly T[]> => observable =>
  pipe(
    observable,
    reduce(toArrayReducer, (): T[] => []),
    toValue(schedulerFactory),
  );
