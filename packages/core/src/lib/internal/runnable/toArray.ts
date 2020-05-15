import { pipe } from "../../functions";
import { reduce } from "./reduce";
import { RunnableLike } from "./interfaces";

/**
 * Accumulates all values emitted by `enumerable` into an array.
 *
 * @param enumerable
 */
export const toArray = <T>(runnable: RunnableLike<T>): readonly T[] =>
  pipe(
    runnable,
    reduce(
      (acc, next) => {
        acc.push(next);
        return acc;
      },
      (): T[] => [],
    ),
  );
