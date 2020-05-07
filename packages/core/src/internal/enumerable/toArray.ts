import { pipe } from "../../functions";
import { EnumerableLike } from "./interfaces";
import { reduce } from "./reduce";

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
