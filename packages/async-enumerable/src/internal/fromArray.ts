import { pipe } from "@reactive-js/pipe";
import { map, scan, takeFirst, ObservableLike } from "@reactive-js/observable";
import { AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerable } from "./createAsyncEnumerable";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(
  values: readonly T[],
): AsyncEnumerableLike<void, T> => {
  const operator = (obs: ObservableLike<void>) =>
    pipe(
      obs,
      scan(fromArrayScanner, () => -1),
      map(i => values[i]),
      takeFirst(values.length),
    );

  return createAsyncEnumerable(operator);
};
