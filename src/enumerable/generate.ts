import { Generate } from "../container";
import { EnumerableLike } from "../enumerable";
import { Factory, Updater } from "../functions";
import { createEnumerable } from "./enumerable";
import { AbstractEnumerator } from "./enumerator";

class GenerateEnumerator<T> extends AbstractEnumerator<T> {
  constructor(private readonly f: Updater<T>, acc: T) {
    super();
    this.current = acc;
  }

  move(): boolean {
    if (!this.isDisposed) {
      try {
        this.current = this.f(this.current);
      } catch (cause) {
        this.dispose({ cause });
      }
    }
    return this.hasCurrent;
  }
}

/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): EnumerableLike<T> =>
  createEnumerable(() => new GenerateEnumerator(generator, initialValue()));

export const generateT: Generate<EnumerableLike<unknown>> = {
  generate,
};
