import { ToIterable } from "../../../containers.js";
import { newInstance, pipe } from "../../../functions.js";
import { EnumerableLike } from "../../../rx.js";
import { EnumeratorLike_current, EnumeratorLike_move } from "../../../util.js";
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
    while (enumerator[EnumeratorLike_move]()) {
      yield enumerator[EnumeratorLike_current];
    }
  }
}

const Enumerable_toIterable: ToIterable<EnumerableLike>["toIterable"] =
  () => enumerable =>
    newInstance(EnumerableIterable, enumerable);

export default Enumerable_toIterable;
