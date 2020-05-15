import { Factory, Function, pipe } from "../../functions";
import { enumerate } from "./enumerator";
import { fromArray } from "./fromArray";
import { EnumerableLike } from "./interfaces";

class ComputeEnumerable<T> implements EnumerableLike<T> {
  constructor(private readonly f: Factory<T>) {}

  enumerate() {
    return pipe([this.f()], fromArray(), enumerate);
  }
}

const _compute = <T>(f: Factory<T>): EnumerableLike<T> =>
  new ComputeEnumerable(f);

/**
 * Creates an EnumerableLike that emits the computed value.
 *
 * @param valueFactory
 */
export const compute = <T>(): Function<Factory<T>, EnumerableLike<T>> =>
  _compute;
