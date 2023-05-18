import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_toReadonlyArray =
  <T>() =>
  (enumerator: EnumeratorLike<T>) => {
    const result: T[] = [];

    while (enumerator[EnumeratorLike_move]()) {
      result.push(enumerator[EnumeratorLike_current]);
    }

    return result;
  };

export default Enumerator_toReadonlyArray;
