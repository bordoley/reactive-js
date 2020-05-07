import { EnumerableLike } from "./interfaces";
import { fromArray } from "./fromArray";

class ComputeEnumerable<T> implements EnumerableLike<T> {
  constructor(private readonly f: () => T) {}

  enumerate() {
    return fromArray([this.f()]).enumerate();
  }
}

/**
 * Creates an EnumerableLike that emits the computed value.
 *
 * @param valueFactory
 */
export const compute = <T>(f: () => T): EnumerableLike<T> =>
  new ComputeEnumerable(f);
