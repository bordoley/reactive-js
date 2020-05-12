import { Factory, Generator } from "../../functions.ts";
import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";

class GenerateEnumerator<T> implements EnumeratorLike<T> {
  current: T;
  hasCurrent = false;

  constructor(private readonly f: Generator<T>, acc: T) {
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
    private readonly f: Generator<T>,
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
  generator: Generator<T>,
  initialValue: Factory<T>,
): EnumerableLike<T> => new GenerateEnumerable(generator, initialValue);
