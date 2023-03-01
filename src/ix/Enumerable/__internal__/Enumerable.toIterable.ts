import { ToIterable } from "../../../containers.js";
import { newInstance, pipe } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const EnumerableIterable_enumerable = Symbol("EnumerableIterable_enumerable");

class EnumerableIterable<T = unknown> implements Iterable<T> {
  private readonly [EnumerableIterable_enumerable]: EnumerableLike<T>;
  constructor(enumerable: EnumerableLike<T>) {
    this[EnumerableIterable_enumerable] = enumerable;
  }

  *[Symbol.iterator]() {
    const enumerator = pipe(
      this[EnumerableIterable_enumerable],
      Enumerable_enumerate(),
    );
    while (Enumerator_move(enumerator)) {
      yield Enumerator_getCurrent(enumerator);
    }
  }
}

const Enumerable_toIterable: ToIterable<EnumerableLike>["toIterable"] =
  () => enumerable =>
    newInstance(EnumerableIterable, enumerable);

export default Enumerable_toIterable;
