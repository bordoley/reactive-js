import { compose, returns } from "../../functions.ts";
import { scan, map, takeFirst } from "../../observable.ts";
import { createStreamable } from "../../streamable.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(values: readonly T[]): AsyncEnumerableLike<T> => createStreamable(
  compose(
    scan(fromArrayScanner, returns(-1)),
    map((i: number) => values[i]),
    takeFirst(values.length),
  ),
);
