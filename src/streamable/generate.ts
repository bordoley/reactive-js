import { fromValue } from "../container";
import { Factory, Updater, pipe } from "../functions";
import { fromArrayT, scan, scanAsync } from "../observable";
import { AsyncEnumerableLike } from "../streamable";
import { createFromObservableOperator } from "./streamable";

const generateScanner =
  <T>(generator: Updater<T>) =>
  (acc: T, _: unknown) =>
    generator(acc);

const asyncGeneratorScanner = <T>(
  generator: Updater<T>,
  options: { readonly delay?: number },
) => {
  const fromValueWithDelay = fromValue(fromArrayT, options);
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
  const { delay = Math.max(options.delay ?? 0, 0) } = options;

  const op =
    delay > 0
      ? scanAsync<void, T>(
          asyncGeneratorScanner(generator, options),
          initialValue,
        )
      : scan(generateScanner(generator), initialValue);
  return createFromObservableOperator(op);
};
