import { pipe } from "../../functions.ts";
import { EnumerableLike } from "./interfaces.ts";
import { reduce } from "./reduce.ts";

/**
 * Accumulates all values emitted by `enumerable` into an array.
 *
 * @param enumerable
 */
export const toArray = <T>(enumerable: EnumerableLike<T>): readonly T[] =>
  pipe(
    enumerable,
    reduce(
      (acc, next) => {
        acc.push(next);
        return acc;
      },
      (): T[] => [],
    ),
  );
