import { pipe } from "@reactive-js/pipe";
import { ObservableLike, scan } from "@reactive-js/observable";
import { AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerable } from "./createAsyncEnumerable";

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
): AsyncEnumerableLike<void, T> => {
  const operator = (obs: ObservableLike<void>) =>
    pipe(obs, scan(generateScanner(generator), initialValue));
  return createAsyncEnumerable(operator);
};
