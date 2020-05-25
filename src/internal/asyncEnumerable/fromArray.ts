import { Function1, compose, returns } from "../../functions";
import {
  scan,
  concatMap,
  fromValue as fromValueObs,
  takeFirst,
} from "../../observable";
import { createStreamable } from "../../streamable";
import { AsyncEnumerableLike } from "./interfaces";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(
  options: {
    readonly delay?: number;
    readonly startIndex?: number;
    readonly endIndex?: number;
  } = {},
): Function1<readonly T[], AsyncEnumerableLike<T>> => values => {
  const valuesLength = values.length;
  const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
  const endIndex = Math.max(
    Math.min(options.endIndex ?? valuesLength, valuesLength),
    0,
  );

  const fromValueWithDelay = fromValueObs<T>(options);

  return createStreamable(
    compose(
      scan(fromArrayScanner, returns(startIndex - 1)),
      concatMap(i => fromValueWithDelay(values[i])),
      takeFirst({ count: endIndex - startIndex }),
    ),
  );
};
