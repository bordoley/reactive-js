import { Factory, Updater } from "../../functions";
import { EnumerableLike, EnumeratorLike } from "../../enumerable";

class GenerateEnumerator<T> implements EnumeratorLike<T> {
  current: T;
  hasCurrent = false;

  constructor(private readonly f: Updater<T>, acc: T) {
    this.current = acc;
  }

  move(): boolean {
    this.hasCurrent = true;
    this.current = this.f(this.current);

    return true;
  }
}

class GenerateEnumerable<T> implements EnumerableLike<T> {
  constructor(
    private readonly f: Updater<T>,
    private readonly acc: Factory<T>,
  ) {}

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
