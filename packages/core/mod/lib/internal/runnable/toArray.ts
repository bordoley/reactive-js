import { Function } from "../../functions.ts";
import { reduce } from "./reduce.ts";
import { RunnableLike } from "./interfaces.ts";

const toArrayReducer = <T>(acc: T[], next: T) => {
  acc.push(next);
  return acc;
};

const _toArray = reduce<any, any[]>(toArrayReducer, () => []);

/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
export const toArray = <T>(): Function<RunnableLike<T>, T[]> => _toArray
