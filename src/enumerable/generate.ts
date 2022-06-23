import { EnumerableLike } from "../enumerable";
import { Factory, Updater } from "../functions";
import { AbstractEnumerable } from "./enumerable";
import { EnumeratorBase } from "./enumerator";

class GenerateEnumerator<T> extends EnumeratorBase<T> {
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

class GenerateEnumerable<T> extends AbstractEnumerable<T> {
  constructor(
    private readonly f: Updater<T>,
    private readonly acc: Factory<T>,
  ) {
    super();
  }

  enumerate() {
    return new GenerateEnumerator(this.f, this.acc());
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
): EnumerableLike<T> => new GenerateEnumerable(generator, initialValue);
