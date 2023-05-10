import type * as Enumerator from "../../Enumerator.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_toReadonlyArray: Enumerator.Signature["toReadonlyArray"] =
  <T>() =>
  (enumerator: EnumeratorLike<T>) => {
    const result: T[] = [];

    while (enumerator[EnumeratorLike_move]()) {
      result.push(enumerator[EnumeratorLike_current]);
    }

    return result;
  };

export default Enumerator_toReadonlyArray;
