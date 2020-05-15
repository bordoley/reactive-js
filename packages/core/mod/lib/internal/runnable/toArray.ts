import { reduce } from "./reduce.ts";

/**
 * Accumulates all values emitted by `enumerable` into an array.
 *
 * @param enumerable
 */
export const toArray = <T>() =>
  reduce(
    (acc, next: T) => {
      acc.push(next);
      return acc;
    },
    (): T[] => [],
  );
