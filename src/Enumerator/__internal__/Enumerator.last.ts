import { Optional, none } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_last =
  <T>() =>
  (enumerator: EnumeratorLike<T>) => {
    let last: Optional<T> = none;
    while (enumerator[EnumeratorLike_move]()) {
      last = enumerator[EnumeratorLike_current];
    }
    return last;
  };
export default Enumerator_last;
