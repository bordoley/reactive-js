import { pipe } from "../../functions";
import { EnumerableLike } from "./interfaces";
import { reduce } from "./reduce";

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
