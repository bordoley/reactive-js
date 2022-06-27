import { concatMap, fromValue as fromValueContainer } from "../container";
import { Function1, compose, returns } from "../functions";
import { concatAllT, fromArrayT, mapT, scan, takeFirst } from "../observable";
import { AsyncEnumerableLike } from "../streamable";
import { fromObservableOperator } from "./streamable";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray =
  <T>(
    options: {
      readonly delay?: number;
      readonly startIndex?: number;
      readonly endIndex?: number;
    } = {},
  ): Function1<readonly T[], AsyncEnumerableLike<T>> =>
  values => {
    const valuesLength = values.length;
    const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
    const endIndex = Math.max(
      Math.min(options.endIndex ?? valuesLength, valuesLength),
      0,
    );

    const fromValueWithDelay = fromValueContainer(fromArrayT, options);

    return fromObservableOperator(
      compose(
        scan(fromArrayScanner, returns(startIndex - 1)),
        concatMap({ ...mapT, ...concatAllT }, (i: number) =>
          fromValueWithDelay(values[i]),
        ),
        takeFirst({ count: endIndex - startIndex }),
      ),
    );
  };
