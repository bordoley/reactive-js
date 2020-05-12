import { Factory, Generator } from "../../functions";
import { scan } from "../../observable";
import { createStreamable } from "../../streamable";
import { AsyncEnumerableLike } from "./interfaces";

const generateScanner = <T>(generator: Generator<T>) => (acc: T, _: unknown) =>
  generator(acc);

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
  generator: Generator<T>,
  initialValue: Factory<T>,
): AsyncEnumerableLike<T> =>
  createStreamable(scan(generateScanner(generator), initialValue));
