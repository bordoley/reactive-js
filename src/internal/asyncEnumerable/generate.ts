import { Factory, Updater, pipe } from "../../functions";
import { fromValue, scan, scanAsync } from "../../observable";
import { createStreamable } from "../../streamable";
import { AsyncEnumerableLike } from "../../asyncEnumerable";

const generateScanner = <T>(generator: Updater<T>) => (acc: T, _: unknown) =>
  generator(acc);

const asyncGeneratorScanner = <T>(
  generator: Updater<T>,
  options: { readonly delay?: number },
) => {
  const fromValueWithDelay = fromValue<T>(options);
  return (acc: T, _: unknown) => pipe(acc, generator, fromValueWithDelay);
};

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options: { readonly delay?: number } = {},
): AsyncEnumerableLike<T> => {
  const { delay = 0 } = options;
  const op =
    delay > 0
      ? scanAsync<void, T>(
          asyncGeneratorScanner(generator, options),
          initialValue,
        )
      : scan(generateScanner(generator), initialValue);
  return createStreamable(op);
};
