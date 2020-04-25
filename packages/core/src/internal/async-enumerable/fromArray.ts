import {
  map,
  scan,
  takeFirst,
  ObservableOperator,
} from "../../observable";
import { compose } from "../../pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import { AsyncEnumerableLike } from "./interfaces";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(
  values: readonly T[],
): AsyncEnumerableLike<void, T> => {
  const operator: ObservableOperator<void, T> = compose(
    scan(fromArrayScanner, () => -1),
    map((i: number) => values[i]),
    takeFirst(values.length),
  );

  return createAsyncEnumerable(operator);
};
