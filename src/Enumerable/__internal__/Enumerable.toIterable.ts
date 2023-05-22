import type * as Enumerable from "../../Enumerable.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

function* iterate<T>(enumerable: EnumerableLike<T>) {
  const enumerator = enumerable[EnumerableLike_enumerate]();
  while (enumerator[EnumeratorLike_move]()) {
    yield enumerator[EnumeratorLike_current];
  }
}

const Enumerable_toIterable: Enumerable.Signature["toIterable"] =
  <T>() =>
  (enumerable: EnumerableLike<T>) => ({
    [Symbol.iterator]() {
      return iterate(enumerable);
    },
  });

export default Enumerable_toIterable;
