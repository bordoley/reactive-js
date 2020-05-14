import { Function } from "../../functions";
import { reduce } from "./reduce";
import { RunnableLike } from "./interfaces";

// FIXME: Avoid duplicating this function all over the place.
const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

const _toArray = reduce(toArrayReducer, (): unknown[] => []);

export const toArray = <T>(): Function<RunnableLike<T>, readonly T[]> =>
  _toArray as Function<RunnableLike<T>, readonly T[]>;
