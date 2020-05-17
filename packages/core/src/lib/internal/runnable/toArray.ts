import { Function1 } from "../../functions";
import { RunnableLike } from "./interfaces";
import { reduce } from "./reduce";

const toArrayReducer = <T>(acc: T[], next: T) => {
  acc.push(next);
  return acc;
};

const _toArray = reduce<any, any[]>(toArrayReducer, () => []);

/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
export const toArray = <T>(): Function1<RunnableLike<T>, T[]> => _toArray;
