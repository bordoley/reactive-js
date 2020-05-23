import { Function1 } from "../../functions.ts";
import { RunnableLike } from "./interfaces.ts";
import { reduce } from "./reduce.ts";

const toArrayReducer = <T>(acc: readonly T[], next: T) => {
  (acc as T[]).push(next);
  return acc;
};

const _toArray = reduce<any, readonly any[]>(
  toArrayReducer,
  (): readonly any[] => [],
);

/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
export const toArray = <T>(): Function1<RunnableLike<T>, readonly T[]> =>
  _toArray;
