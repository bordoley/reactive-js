import { pipe } from "../../functions.ts";
import { reduce } from "./reduce.ts";
import { RunnableLike } from "./interfaces.ts";

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
