import { scan } from "../../observable.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";
import { createAsyncEnumerable } from "./createAsyncEnumerable.ts";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
): AsyncEnumerableLike<void, T> =>
  createAsyncEnumerable(scan(generateScanner(generator), initialValue));
