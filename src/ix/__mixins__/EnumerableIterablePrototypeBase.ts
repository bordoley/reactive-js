import { returns } from "../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../ix.js";

const EnumerableIterablePrototypeBase = /*@__PURE__*/ returns({
  *[Symbol.iterator](this: EnumerableLike) {
    const enumerator = this[EnumerableLike_enumerate]();
    while (enumerator[EnumeratorLike_move]()) {
      yield enumerator[EnumeratorLike_current];
    }
  },
}) as <T>() => Pick<EnumerableLike<T>, typeof Symbol.iterator>;

export default EnumerableIterablePrototypeBase;
