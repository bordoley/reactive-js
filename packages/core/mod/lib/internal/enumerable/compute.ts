import { Factory, Function1, pipe } from "../../functions.ts";
import { enumerate } from "./enumerator.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableLike } from "./interfaces.ts";

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
export const compute = <T>(): Function1<Factory<T>, EnumerableLike<T>> =>
  _compute;
