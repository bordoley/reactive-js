import { fromArray } from "./fromArray";
import { EnumerableLike } from "./interfaces";
import { Factory } from "../../functions";

class ComputeEnumerable<T> implements EnumerableLike<T> {
  constructor(private readonly f: Factory<T>) {}

  enumerate() {
    return fromArray([this.f()]).enumerate();
  }
}

/**
 * Creates an EnumerableLike that emits the computed value.
 *
 * @param valueFactory
 */
export const compute = <T>(f: Factory<T>): EnumerableLike<T> =>
  new ComputeEnumerable(f);
