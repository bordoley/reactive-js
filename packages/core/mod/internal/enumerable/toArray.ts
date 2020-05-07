import { pipe } from "../../functions.ts";
import { EnumerableLike } from "./interfaces.ts";
import { reduce } from "./reduce.ts";

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
