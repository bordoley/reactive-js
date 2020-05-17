import { Factory, Updater } from "../../functions.ts";
import { scan } from "../../observable.ts";
import { createStreamable } from "../../streamable.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";

const generateScanner = <T>(generator: Updater<T>) => (acc: T, _: unknown) =>
  generator(acc);

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
): AsyncEnumerableLike<T> =>
  createStreamable(scan(generateScanner(generator), initialValue));
