import { Generate } from "../container";
import { dispose, isDisposed } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { AbstractEnumerator, current, hasCurrent } from "../enumerator";
import { Factory, Updater, newInstance, pipe } from "../functions";
import { createEnumerable } from "./enumerable";

class GenerateEnumerator<T> extends AbstractEnumerator<T> {
  constructor(private readonly f: Updater<T>, acc: T) {
    super();
    this.current = acc;
  }

  move(): boolean {
    if (!isDisposed(this)) {
      try {
        this.current = this.f(current(this));
      } catch (cause) {
        pipe(this, dispose({ cause }));
      }
    }
    return hasCurrent(this);
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
  createEnumerable(() =>
    newInstance(GenerateEnumerator, generator, initialValue()),
  );

export const generateT: Generate<EnumerableLike<unknown>> = {
  generate,
};
