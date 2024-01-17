import { Set, Set_add } from "../../../__internal__/constants.js";
import {
  DictionaryLike,
  DictionaryLike_keys,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../collections.js";
import { newInstance } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_keySet: Dictionary.Signature["keySet"] =
  <TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, unknown>): ReadonlySet<TKey> => {
    const result = newInstance<Set<TKey>>(Set);
    const keys = dict[DictionaryLike_keys][EnumerableLike_enumerate]();

    while (keys[EnumeratorLike_move]()) {
      result[Set_add](keys[EnumeratorLike_current]);
    }
    return result;
  };

export default Dictionary_keySet;
