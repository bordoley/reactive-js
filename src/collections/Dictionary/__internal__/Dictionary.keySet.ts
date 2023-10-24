import {
  AssociativeLike_keys,
  DictionaryLike,
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
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();

    while (keys[EnumeratorLike_move]()) {
      result.add(keys[EnumeratorLike_current]);
    }
    return result;
  };

export default Dictionary_keySet;
