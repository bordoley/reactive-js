import type * as Enumerator from "../../Enumerator.js";
import { none } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_first: Enumerator.Signature["first"] =
  <T>() =>
  (enumerator: EnumeratorLike<T>) => {
    enumerator[EnumeratorLike_move]();
    return enumerator[EnumeratorLike_hasCurrent]
      ? enumerator[EnumeratorLike_current]
      : none;
  };
export default Enumerator_first;
