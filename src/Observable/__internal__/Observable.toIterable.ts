import type * as Observable from "../../Observable.js";
import {
  EnumerableBaseLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

function* iterate<T>(enumerable: EnumerableBaseLike<T>) {
  const enumerator = enumerable[EnumerableLike_enumerate]();
  while (enumerator[EnumeratorLike_move]()) {
    yield enumerator[EnumeratorLike_current];
  }
}

const Observable_toIterable: Observable.Signature["toIterable"] =
  <T>() =>
  (enumerable: EnumerableBaseLike<T>) => ({
    [Symbol.iterator]() {
      return iterate(enumerable);
    },
  });

export default Observable_toIterable;
