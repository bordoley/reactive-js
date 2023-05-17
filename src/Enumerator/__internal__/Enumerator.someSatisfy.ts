import type * as Enumerator from "../../Enumerator.js";
import { Predicate } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_someSatisfy: Enumerator.Signature["someSatisfy"] =
  <T>(predicate: Predicate<T>) =>
  (enumerator: EnumeratorLike<T>) => {
    let result = false;
    while (enumerator[EnumeratorLike_move]()) {
      const next = enumerator[EnumeratorLike_current];
      result = predicate(next);

      if (result) {
        break;
      }
    }
    return result;
  };
export default Enumerator_someSatisfy;
