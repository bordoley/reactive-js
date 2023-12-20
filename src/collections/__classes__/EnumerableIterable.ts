import { EnumerableLike_enumerate } from "../../collections.js";
import { pipe } from "../../functions.js";
import Enumerator_fromIterator from "../Enumerator/__private__/Enumerator.fromIterator.js";

export default class EnumerableIterable<T> implements Iterable<T> {
  *[Symbol.iterator](): Iterator<T> {}

  [EnumerableLike_enumerate]() {
    return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
  }
}
