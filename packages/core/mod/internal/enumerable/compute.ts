import { Factory } from "../../functions.ts";
import { enumerate } from "./enumerate.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableLike } from "./interfaces.ts";

class ComputeEnumerable<T> implements EnumerableLike<T> {
  constructor(private readonly f: Factory<T>) {}

  enumerate() {
    return enumerate(fromArray([this.f()]));
  }
}

/**
 * Creates an EnumerableLike that emits the computed value.
 *
 * @param valueFactory
 */
export const compute = <T>(f: Factory<T>): EnumerableLike<T> =>
  new ComputeEnumerable(f);
