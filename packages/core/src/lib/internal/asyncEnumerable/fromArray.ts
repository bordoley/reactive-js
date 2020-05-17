import { Function1, compose, returns } from "../../functions";
import { scan, map, takeFirst } from "../../observable";
import { createStreamable } from "../../streamable";
import { AsyncEnumerableLike } from "./interfaces";

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(
  { startIndex } = { startIndex: 0 },
): Function1<readonly T[], AsyncEnumerableLike<T>> => values =>
  createStreamable(
    compose(
      scan(fromArrayScanner, returns(startIndex - 1)),
      map(i => values[i]),
      takeFirst(values.length - startIndex),
    ),
  );
