import { AsyncEnumerableLike } from "./interfaces";
import { ObservableOperator, scan, map, takeFirst } from "../../observable";
import { compose, returns } from "../../functions";
import { createStreamable } from "../../streamable";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(values: readonly T[]): AsyncEnumerableLike<T> => {
  const operator: ObservableOperator<void, T> = compose(
    scan(fromArrayScanner, returns(-1)),
    map((i: number) => values[i]),
    takeFirst(values.length),
  );

  return createStreamable(operator);
};
