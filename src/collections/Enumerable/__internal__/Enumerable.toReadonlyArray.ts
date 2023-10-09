import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../collections.js";
import type * as Enumerable from "../../Enumerable.js";

const Enumerable_toReadonlyArray: Enumerable.Signature["toReadonlyArray"] =
  <T>() =>
  (enumerable: EnumerableLike<T>) => {
    const result: T[] = [];

    const enumerator = enumerable[EnumerableLike_enumerate]();

    while (enumerator[EnumeratorLike_move]()) {
      result.push(enumerator[EnumeratorLike_current]);
    }

    return result;
  };

export default Enumerable_toReadonlyArray;
