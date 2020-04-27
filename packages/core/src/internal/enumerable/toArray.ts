import { EnumerableLike } from "./interfaces";
import { reduce } from "./reduce";
import { pipe } from "../../functions";

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
